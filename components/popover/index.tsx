import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Trigger, { TriggerProps } from '../widgets/trigger';
import { createClassName } from '../utils';

const componentClassName = createClassName('popover');

export type PopoverTheme = 'light' | 'dark';

export interface PopoverProps extends TriggerProps {
  className?: string;
  style?: React.CSSProperties;
  content?: React.ReactNode | (() => React.ReactNode);
  theme?: PopoverTheme;
  color?: string;
  placement?: TriggerProps['placement'];
  visible?: boolean;
  trigger?: TriggerProps['action'];
  offset?: number;
  visibleArrow?: boolean;
  arrowSize?: number;
  destroy?: boolean;
  transition?: TriggerProps['popupTransition'];
  onVisibleChange?: (visible: boolean) => void;
}

export default class Popover extends React.PureComponent<PopoverProps> {
  static displayName: 'Popover';
  static propTypes = {
    content: PropTypes.node,
    destroy: PropTypes.bool,
    visibleArrow: PropTypes.bool,
    disabled: PropTypes.bool,
    offset: PropTypes.number,
    arrowSize: PropTypes.number,
    transition: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    onVisibleChange: PropTypes.func,
  };
  static defaultProps = {
    theme: 'light',
    visibleArrow: true,
    destroy: false,
    arrowSize: 6,
    offset: 0,
    delay: 100,
  };
  renderPopup = () => {
    const { color, visibleArrow, content } = this.props;
    const style2Use: React.CSSProperties = {};
    const style3Use: React.CSSProperties = { color };
    if (color) {
      style2Use.backgroundColor = color;
    }
    return (
      <>
        {visibleArrow ? (
          <div style={style3Use} className={`${componentClassName}-arrow`} />
        ) : null}
        <div style={style2Use} className={`${componentClassName}-content`}>
          {typeof content === 'function' ? content() : content}
        </div>
      </>
    );
  };
  render() {
    const {
      visible,
      content,
      color,
      theme = 'light',
      transition,
      trigger,
      visibleArrow = true,
      destroy = false,
      arrowSize = 6,
      offset = 0,
      delay = 100,
      className,
      style,
      onVisibleChange,
      ...rest
    } = this.props;
    let popupTransition = {
      ...transition,
      timeout: 500,
      classNames: 'mooli-fade',
    };

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${theme}`]: theme,
    });

    return (
      <Trigger
        prefixCls={componentClassName}
        popupClassName={className2Use}
        popupStyle={style}
        popupTransition={popupTransition}
        action={trigger}
        offset={visibleArrow ? offset! + arrowSize! : offset}
        destroyPopupOnHide={destroy}
        popupVisible={visible}
        popup={this.renderPopup()}
        onPopupVisibleChange={onVisibleChange}
        {...rest}
      />
    );
  }
}
