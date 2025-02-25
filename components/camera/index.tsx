/* eslint-disable no-undef */
import * as React from 'react';

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

interface ScreenshotDimensions {
  width: number;
  height: number;
}

export type CameraProps = Omit<React.HTMLProps<HTMLVideoElement>, 'ref'> & {
  audio?: boolean;
  audioConstraints?: MediaStreamConstraints['audio'];
  shotSourceSize?: boolean;
  imageSmoothing?: boolean;
  mirrored?: boolean;
  shotHeight?: number;
  shotWidth?: number;
  onUserMedia?: (stream: MediaStream) => void;
  onUserMediaError?: (error: string | DOMException) => void;
  shotFormat?: 'image/webp' | 'image/png' | 'image/jpeg';
  shotQuality?: number;
  videoConstraints?: MediaStreamConstraints['video'];
};

interface CameraState {
  hasUserMedia: boolean;
  src?: string;
}

export default class Camera extends React.PureComponent<
  CameraProps,
  CameraState
> {
  static defaultProps = {
    audio: false,
    shotSourceSize: false,
    imageSmoothing: true,
    mirrored: false,
    onUserMedia: () => undefined,
    onUserMediaError: () => undefined,
    shotFormat: 'image/webp',
    shotQuality: 0.92,
  };

  private canvas: HTMLCanvasElement | null = null;

  private ctx: CanvasRenderingContext2D | null = null;

  private unmounted = false;

  stream: MediaStream | null | undefined;

  video: HTMLVideoElement | null | undefined;

  constructor(props: CameraProps) {
    super(props);
    this.state = {
      hasUserMedia: false,
    };
  }

  componentDidMount() {
    const { state, props } = this;

    if (!hasGetUserMedia()) {
      props.onUserMediaError!('getUserMedia not supported');

      return;
    }

    if (!state.hasUserMedia) {
      this.requestUserMedia();
    }
  }

  componentDidUpdate(nextProps: CameraProps) {
    const { props } = this;

    if (!hasGetUserMedia()) {
      props.onUserMediaError!('getUserMedia not supported');

      return;
    }

    const audioConstraintsChanged =
      JSON.stringify(nextProps.audioConstraints) !==
      JSON.stringify(props.audioConstraints);
    const videoConstraintsChanged =
      JSON.stringify(nextProps.videoConstraints) !==
      JSON.stringify(props.videoConstraints);
    const shotWidthChanged = nextProps.shotWidth !== props.shotWidth;
    const shotHeightChanged = nextProps.shotHeight !== props.shotHeight;
    if (videoConstraintsChanged || shotWidthChanged || shotHeightChanged) {
      this.canvas = null;
      this.ctx = null;
    }
    if (audioConstraintsChanged || videoConstraintsChanged) {
      // this.stopAndCleanup();
      this.requestUserMedia();
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
    this.stopAndCleanup();
  }

  private static stopMediaStream(stream: MediaStream | null | undefined) {
    if (stream) {
      if (stream.getVideoTracks && stream.getAudioTracks) {
        stream.getVideoTracks().forEach((track) => {
          stream.removeTrack(track);
          track.stop();
        });
        stream.getAudioTracks().forEach((track) => {
          stream.removeTrack(track);
          track.stop();
        });
      } else {
        (stream as unknown as MediaStreamTrack).stop();
      }
    }
  }

  private stopAndCleanup() {
    const { state } = this;

    if (state.hasUserMedia) {
      Camera.stopMediaStream(this.stream);

      if (state.src) {
        window.URL.revokeObjectURL(state.src);
      }
    }
  }

  getScreenshot(screenshotDimensions?: ScreenshotDimensions) {
    const { state, props } = this;

    if (!state.hasUserMedia) return null;

    const canvas = this.getCanvas(screenshotDimensions);
    return canvas && canvas.toDataURL(props.shotFormat, props.shotQuality);
  }

  getCanvas(screenshotDimensions?: ScreenshotDimensions) {
    const { state, props } = this;

    if (!this.video) {
      return null;
    }

    if (!state.hasUserMedia || !this.video.videoHeight) return null;

    if (!this.ctx) {
      let canvasWidth = this.video.videoWidth;
      let canvasHeight = this.video.videoHeight;
      if (!this.props.shotSourceSize) {
        const aspectRatio = canvasWidth / canvasHeight;

        canvasWidth = props.shotWidth || this.video.clientWidth;
        canvasHeight = canvasWidth / aspectRatio;

        if (props.shotHeight && canvasHeight < props.shotHeight) {
          canvasHeight = props.shotHeight;
          canvasWidth = canvasHeight * aspectRatio;
        }
      }

      this.canvas = document.createElement('canvas');
      this.canvas.width = screenshotDimensions?.width || canvasWidth;
      this.canvas.height = screenshotDimensions?.height || canvasHeight;
      this.ctx = this.canvas.getContext('2d');
    }

    const { ctx, canvas } = this;

    if (ctx && canvas) {
      if (props.mirrored) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }

      ctx.imageSmoothingEnabled = props.imageSmoothing!;
      ctx.drawImage(
        this.video,
        0,
        0,
        screenshotDimensions?.width || canvas.width,
        screenshotDimensions?.height || canvas.height,
      );

      if (props.mirrored) {
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width, 0);
      }
    }

    return canvas;
  }

  private requestUserMedia() {
    const { props } = this;

    const sourceSelected = (
      audioConstraints: boolean | MediaTrackConstraints | undefined,
      videoConstraints: boolean | MediaTrackConstraints | undefined,
    ) => {
      const constraints: MediaStreamConstraints = {
        video:
          typeof videoConstraints !== 'undefined' ? videoConstraints : true,
      };

      if (props.audio) {
        constraints.audio =
          typeof audioConstraints !== 'undefined' ? audioConstraints : true;
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          if (this.unmounted) {
            Camera.stopMediaStream(stream);
          } else {
            this.handleUserMedia(null, stream);
          }
        })
        .catch((e) => {
          this.handleUserMedia(e);
        });
    };

    if ('mediaDevices' in navigator) {
      sourceSelected(props.audioConstraints, props.videoConstraints);
    } else {
      const optionalSource = (id: string | null) =>
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        ({ optional: [{ sourceId: id }] } as MediaTrackConstraints);

      const constraintToSourceId = (constraint: any) => {
        const { deviceId } = constraint;

        if (typeof deviceId === 'string') {
          return deviceId;
        }

        if (Array.isArray(deviceId) && deviceId.length > 0) {
          return deviceId[0];
        }

        if (typeof deviceId === 'object' && deviceId.ideal) {
          return deviceId.ideal;
        }

        return null;
      };

      // @ts-ignore
      MediaStreamTrack.getSources((sources) => {
        let audioSource: string | null = null;
        let videoSource: string | null = null;

        sources.forEach((source: MediaStreamTrack) => {
          if (source.kind === 'audio') {
            audioSource = source.id;
          } else if (source.kind === 'video') {
            videoSource = source.id;
          }
        });

        const audioSourceId = constraintToSourceId(props.audioConstraints);
        if (audioSourceId) {
          audioSource = audioSourceId;
        }

        const videoSourceId = constraintToSourceId(props.videoConstraints);
        if (videoSourceId) {
          videoSource = videoSourceId;
        }

        sourceSelected(
          optionalSource(audioSource),
          optionalSource(videoSource),
        );
      });
    }
  }

  private handleUserMedia(err: any, stream?: MediaStream) {
    const { props } = this;

    if (err || !stream) {
      this.setState({ hasUserMedia: false });
      props.onUserMediaError!(err);

      return;
    }

    this.stream = stream;

    try {
      if (this.video) {
        this.video.srcObject = stream;
      }
      this.setState({ hasUserMedia: true });
    } catch (error) {
      this.setState({
        hasUserMedia: true,
        // @ts-ignore
        src: window.URL.createObjectURL(stream),
      });
    }

    props.onUserMedia!(stream);
  }

  render() {
    const { state, props } = this;

    const {
      audio,
      shotSourceSize,
      onUserMedia,
      onUserMediaError,
      shotFormat,
      shotQuality,
      shotWidth,
      shotHeight,
      audioConstraints,
      videoConstraints,
      imageSmoothing,
      mirrored,
      style = {},
      ...rest
    } = props;

    const videoStyle = mirrored
      ? { ...style, transform: `${style.transform || ''} scaleX(-1)` }
      : style;

    return (
      <video
        ref={(ref) => {
          this.video = ref;
        }}
        autoPlay
        playsInline
        src={state.src}
        muted={!audio}
        style={videoStyle}
        {...rest}
      />
    );
  }
}
