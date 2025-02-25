import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Context from './context';
import { getRootScrollTop, getScrollTop } from '../utils/dom/scroll';

export interface IndexAnchorProps {
  index?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  formatIndexAnchor?: (index: string) => React.ReactNode;
  onScrollIntoView?: ()=> void;
}

export interface IndexAnchorStates {
  top: number,
  left: number | null,
  rect: { top?: number, left?: number, right?: number, height?: number },
  width: number | null,
  active: boolean,
}

export default class IndexAnchor extends React.PureComponent<IndexAnchorProps, IndexAnchorStates> {
  static contextType = Context;
  static displayName: 'IndexAnchor';
  static propTypes = {
    index: PropTypes.string,
    formatIndexAnchor: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};
  public curRef: React.RefObject<HTMLDivElement>;
  constructor(props: IndexAnchorProps, context?: any) {
    super(props, context);
    this.curRef = React.createRef();

    this.state = {
      top: 0,
      left: null,
      rect: { top: 0, height: 0 },
      width: null,
      active: false,
    }
  }
  get sticky(){
    return this.state.active && this.context.sticky
  }
  get anchorStyle(): {}{
    if (this.sticky) {
      return {
        zIndex: `${this.context.zIndex}`,
        left: this.state.left ? `${this.state.left}px` : null,
        width: this.state.width ? `${this.state.width}px` : null,
        transform: `translate3d(0, ${this.state.top}px, 0)`,
        color: this.context.highlightColor,
      };
    }
    return {}
  }
  componentDidMount() {
    const indexBar = this.getIndexBar();
    indexBar.addChildren(this);

    if(this.curRef.current){
      const rect = this.curRef.current.getBoundingClientRect();
      this.setState({
        rect: {
          height: rect.height
        }
      })
    }
  }
  scrollIntoView(){
    if(this.curRef.current){
      this.curRef.current.scrollIntoView();
    }
  }
  getIndexBar() {
    return this.context.indexBar;
  }
  getRect(scroller: HTMLElement | Window, scrollerRect: { top: number; }){
    if(this.curRef.current){
      const elRect = this.curRef.current.getBoundingClientRect();

      let top: number;
      if (scroller === window || scroller === document.body) {
        top = elRect.top + getRootScrollTop();
      } else {
        top = elRect.top + getScrollTop(scroller) - scrollerRect.top;
      }

      this.setState({
        rect: {
          top: top,
          left: elRect.left,
          right: elRect.right,
          height: elRect.height,
        }
      })

      return {
        top: top,
        left: elRect.left,
        right: elRect.right,
        height: elRect.height,
      };
    }
  }
  setStates(params: {}){
    this.setState(params)
  }
  render() {
    const { index, className, children, formatIndexAnchor, ...rest } = this.props;
    const componentClassName = createClassName('index-anchor');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--sticky`]: this.sticky,
      'mooli-hairline--bottom': this.sticky,
    });
    const rootStyle = this.sticky ? { height: `${this.state.rect.height}px`} : {}
    return (
      <div ref={this.curRef} style={rootStyle}>
        <div style={this.anchorStyle} className={className2Use} {...rest} >
          {children || index && (formatIndexAnchor ? formatIndexAnchor(index) : index)}
        </div>
      </div>
    );
  }
}
