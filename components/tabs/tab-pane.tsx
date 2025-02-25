import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TabContext from './lib/tabContext';
import TabPaneContext from './lib/tabPaneContext';
import { TabBarProps } from './tab-bar';
import { createClassName } from '../utils';

export interface TabPaneProps extends TabBarProps {
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class TabPane extends React.PureComponent<TabPaneProps> {
  static displayName: 'TabPane';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  static contextType = TabPaneContext;
  render() {
    const { style, className, title, children, ...rest } = this.props;
    const componentClassName = createClassName('tab-pane');

    return (
      <TabContext.Consumer>
        {(value) => {
          const isHidden = !(
            Number(this.context.tabKey) === Number(value.activeKey)
          );
          const className2Use: string = classnames(
            componentClassName,
            className,
            {
              hidden: isHidden && value.animated,
            },
          );
          return (
            <div
              hidden={!!(isHidden && !value.animated)}
              className={className2Use}
              style={style}
              {...rest}
            >
              {children}
            </div>
          );
        }}
      </TabContext.Consumer>
    );
  }
}
