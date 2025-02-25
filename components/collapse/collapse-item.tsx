import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CollapseContext from './lib/context';
import Cell, { CellProps } from '../cell/cell';
import { createClassName } from '../utils';
import { raf, doubleRaf } from './lib/utils';

const componentClassName = createClassName('collapse-item');
export interface CollapseItemProps extends CellProps {
  index?: number;
  name?: string;
  disabled?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

interface CollapseItemStates {
  expanded: any;
}
export default class CollapseItem extends React.PureComponent<
  CollapseItemProps,
  CollapseItemStates
> {
  static displayName: 'CollapseItem';
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
  };
  static defaultProps = {
    arrow: true,
  };
  static contextType = CollapseContext;
  protected wrapperRef: React.RefObject<HTMLDivElement>;
  protected contentRef: React.RefObject<HTMLDivElement>;
  constructor(props: CollapseItemProps) {
    super(props);
    this.wrapperRef = React.createRef<HTMLDivElement>();
    this.contentRef = React.createRef<HTMLDivElement>();
  }
  get currentName() {
    return this.props.name ?? this.props.index;
  }
  get expanded() {
    const { value, accordion } = this.context;
    if (!value) return null;
    return accordion
      ? value === this.currentName
      : value.some((name: any) => name === this.currentName);
  }
  componentDidMount() {
    this.update();
  }
  componentDidUpdate() {
    this.update();
  }
  update = () => {
    raf(() => {
      if (!this.contentRef.current || !this.wrapperRef.current) {
        return;
      }
      const { offsetHeight } = this.contentRef.current;
      if (offsetHeight) {
        doubleRaf(() => {
          this.wrapperRef.current!.style.height = this.expanded
            ? `${offsetHeight}px`
            : '0';
        });
      }
    });
  };
  toggle = () => {
    const { disabled } = this.props;
    const { accordion, value, onSwitch } = this.context;
    if (disabled) return;
    const close = accordion && this.currentName === value;
    const name = close ? '' : this.currentName;
    onSwitch && onSwitch(name, !this.expanded);
  };

  genTitle = () => {
    const {
      index,
      name,
      title,
      arrow = true,
      disabled,
      children,
      ...rest
    } = this.props;
    const titleClassName = createClassName(componentClassName, 'title');
    const className3Use: string = classnames(titleClassName, {
      [`${titleClassName}--disabled`]: disabled,
      [`${titleClassName}--expanded`]: this.expanded,
      [`${titleClassName}--borderless`]: !this.context.border,
    });

    return (
      <Cell
        className={className3Use}
        title={title}
        arrow={arrow}
        onClick={this.toggle}
        {...rest}
      />
    );
  };

  genContent = () => {
    const wrapperClassName = createClassName(componentClassName, 'wrapper');
    const contentClassName = createClassName(componentClassName, 'content');
    return (
      <div ref={this.wrapperRef} className={wrapperClassName}>
        <div ref={this.contentRef} className={contentClassName}>
          {this.props.children}
        </div>
      </div>
    );
  };

  render() {
    const { index, className } = this.props;
    const { border } = this.context;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--border`]: index && border,
    });

    return (
      <div className={className2Use}>
        {this.genTitle()}
        {this.genContent()}
      </div>
    );
  }
}
