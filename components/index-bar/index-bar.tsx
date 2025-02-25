import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, getScrollTop, getScroller, isDef,eventStore, isHidden } from '../utils';
import IndexAnchor from "./index-anchor";
import Context from './context';
import { preventDefault } from '../utils/dom/event';

function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    // @ts-ignore
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}

export interface IndexBarProps {
  indexList: string[];
  sticky?: boolean;
  stickyOffsetTop?: number;
  zIndex?: number;
  highlightColor?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  formatIndexBar?: (index: string) => React.ReactNode;
  onChange?: (value: number | string) => void
  onSelect?: (value: number | string) => void
}
export interface IndexBarStates {
  activeAnchorIndex: any;
  interacting: boolean;
}

const componentClassName = createClassName('index-bar');

export default class IndexBar extends React.PureComponent<IndexBarProps, IndexBarStates> {
  static displayName: 'IndexBar';
  static propTypes = {
    indexList: PropTypes.array,
    zIndex: PropTypes.number,
    highlightColor: PropTypes.string,
    sticky: PropTypes.bool,
    stickyOffsetTop: PropTypes.number,
    formatIndexBar: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    indexList: genAlphabet(),
    sticky: true,
    stickyOffsetTop: 0,
  };
  static Anchor: typeof IndexAnchor;
  public childrens: IndexAnchor[] = [];
  public rootRef: React.RefObject<HTMLDivElement>;
  public scroller: HTMLElement | Window | any;
  public events: {
    add: (
      node: EventTarget,
      type: string,
      handler: any,
      options?: {} | undefined,
    ) => any;
    removeAll: () => any;
  };
  public touchActiveIndex: string;
  constructor(props: IndexBarProps, context?: any) {
    super(props, context);

    this.rootRef = React.createRef();
    this.events = eventStore();

    this.state = {
      activeAnchorIndex: props.indexList && props.indexList[0] || null,
      interacting: false,
    }
  }
  get sidebarStyle(){
    if (isDef(this.props.zIndex)) {
      return {
        zIndex: this.props.zIndex + 1,
      };
    }
    return {}
  }
  componentDidMount() {
    if (this.rootRef.current) {
      this.scroller = getScroller(this.rootRef.current);
    }
    this.events.add(this.scroller, 'scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.events.removeAll();
  }
  getContext(this: IndexBar) {
    const { sticky = true, highlightColor, zIndex } = this.props;
    return {
      indexBar: this,
      sticky: sticky,
      highlightColor: highlightColor,
      zIndex: zIndex
    };
  }
  getScrollerRect() {
    if(this.scroller){
      if (this.scroller.getBoundingClientRect) {
        return this.scroller.getBoundingClientRect();
      }
    }
    return {
      top: 0,
      left: 0,
    };
  }
  getActiveAnchorIndex(scrollTop, rects){
    const { sticky = true, stickyOffsetTop = 0 } = this.props;

    for (let i = this.childrens.length - 1; i >= 0; i--) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0;
      const reachTop = sticky ? prevHeight + stickyOffsetTop : 0;

      if (scrollTop + reachTop >= rects[i].top) {
        return i;
      }
    }
    return -1;
  }
  addChildren(child: IndexAnchor){
    this.childrens.push(child)
  }
  setActiveAnchorIndex(index: string){
    this.setState({
      activeAnchorIndex: index,
    })
  }
  scrollToElement(index: string){
    this.scrollTo(index);
  }
  scrollTo(index: string){
    if(this.childrens){
      const match = this.childrens.filter(
        (item: any) => String(item.props.index) === index
      );

      if (match[0]) {
        match[0].scrollIntoView();

        if(index){
          this.setState({
            activeAnchorIndex: index,
          })
        }

        if (this.props.onSelect && typeof this.props.onSelect === 'function') {
          index && this.props.onSelect(index)
        }
      }
    }
  }
  onScroll = () => {
    if(this.rootRef.current && isHidden(this.rootRef.current)){
      return;
    }

    if(this.scroller){
      const { indexList, sticky= true, stickyOffsetTop = 0, onChange } = this.props;
      const scrollTop = getScrollTop(this.scroller);
      const scrollerRect = this.getScrollerRect();
      const rects = this.childrens.map((item) =>
        item.getRect(this.scroller, scrollerRect)
      );

      const active = this.getActiveAnchorIndex(scrollTop, rects);

      if(indexList[active]){
        this.setState({
          activeAnchorIndex: indexList[active],
        })
      }

      if (onChange && typeof onChange === 'function') {
        indexList[active] && onChange(indexList[active])
      }

      if(sticky){
        this.childrens.forEach((item, index) => {
          if (index === active || index === active - 1) {
            if(item.curRef.current){
              const rect = item.curRef.current.getBoundingClientRect();
              item.setStates({
                left: rect.left,
                width: rect.width
              })
            }
          } else {
            item.setStates({
              left: null,
              width: null
            })
          }
          if (index === active) {
            if(rects && rects![index] && rects![index]!.top){
              const top =  Math.max(stickyOffsetTop, rects![index]!.top - scrollTop) + scrollerRect!.top;
              item.setStates({
                active: true,
                top: top
              })
            }
          } else if (index === active - 1) {
            if(rects && rects![active] && rects![active]!.top && rects![index] && rects![index]!.height){
              const activeItemTop = rects![active]!.top - scrollTop;
              item.setStates({
                active: activeItemTop > 0,
                top: activeItemTop + scrollerRect!.top - rects![index]!.height
              })
            }
          } else {
            item.setStates({
              active: false,
            })
          }
        });
      }
    }
  }
  onTouchStart = () => {
    this.setState({ interacting: true })
  }
  onTouchEnd = () => {
    this.setState({ interacting: false })
  }
  onTouchMove = (event: any) => {
    if (!this.state.interacting) return

    preventDefault(event);

    const { clientX, clientY } = event.touches && event.touches[0] || event;
    const target: any = document.elementFromPoint(clientX, clientY);

    if (target) {
      const { index } = target.dataset;

      if (this.touchActiveIndex !== index) {
        this.touchActiveIndex = index;
        this.scrollToElement(index);
      }
    }
  }
  renderIndex(){
    const { indexList, highlightColor, formatIndexBar } = this.props;
    const indexArr = [];
    const indexClassName = createClassName(componentClassName, 'index');
    const tipsClassName = createClassName(componentClassName, 'tips');

    indexList.forEach((index)=> {
      const active = index === this.state.activeAnchorIndex;
      const className2Use: string = classnames(indexClassName, {
        [`${indexClassName}--active`]: active,
      });
      const indexStyle = active && highlightColor ? { color: highlightColor } : {};
      indexArr.push(
        // @ts-ignore
        <span
          key={index}
          data-index={index}
          style={indexStyle}
          className={className2Use}
          onMouseDown={() => {
            this.scrollToElement(index)
          }}
          onTouchStart={() => {
            this.scrollToElement(index)
          }}
          onMouseEnter={() => {
            if (this.state.interacting) {
              this.scrollToElement(index)
            }
          }}
        >
          {formatIndexBar ? formatIndexBar(index) : index}
          {this.state.interacting && active && <em className={tipsClassName}>{formatIndexBar ? formatIndexBar(index) : index}</em>}
        </span>
      )
    });
    return indexArr;
  }
  render() {
    const { indexList, zIndex, highlightColor, formatIndexBar, className, sticky, stickyOffsetTop, children, onSelect, onChange, ...rest } = this.props;
    const className2Use: string = classnames(componentClassName, className);
    const sidebarClassName = createClassName(componentClassName, 'sidebar');
    const sidebarInnerClassName = createClassName(componentClassName, 'sidebar-inner');
    return (
      <Context.Provider value={this.getContext()}>
        <div ref={this.rootRef} className={className2Use} {...rest}>
          <div
            className={sidebarClassName}
            style={this.sidebarStyle}
            onTouchStart={this.onTouchStart}
            onMouseDown={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onMouseUp={this.onTouchEnd}
            onTouchMove={this.onTouchMove}
          >
            <div className={sidebarInnerClassName}>
              {this.renderIndex()}
            </div>
          </div>
          {children}
        </div>
      </Context.Provider>
    );
  }
}
