import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import CollapseContext from './lib/context';
import CollapseItem from './collapse-item';
import { createClassName } from '../utils';

export interface CollapseProps {
  accordion?: boolean;
  value?: any;
  border?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
  onInput?: Function;
}

interface CollapseStates {
  curValue: any;
}
export default class Collapse extends React.PureComponent<
  CollapseProps,
  CollapseStates
> {
  static Item: typeof CollapseItem;
  static displayName: 'Collapse';
  static propTypes = {
    accordion: PropTypes.bool,
    border: PropTypes.bool,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
  };
  static defaultProps = {
    value: [],
    border: true,
  };
  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      curValue: props.value || [],
    };
  }
  onSwitch = (name: any, expanded: any) => {
    const { accordion, onChange, onInput } = this.props;
    const { curValue } = this.state;
    if (!accordion) {
      name = expanded
        ? curValue.concat(name)
        : curValue.filter((activeName: any) => activeName !== name);
    }

    this.setState({ curValue: name });

    if (onChange) onChange(name);
    if (onInput) onInput(name);
  };
  render() {
    const {
      value = [],
      border = true,
      accordion,
      className,
      children,
      onChange,
      onInput,
      ...rest
    } = this.props;
    const { curValue } = this.state;

    const componentClassName = createClassName('collapse');
    const className2Use: string = classnames(componentClassName, className, {
      [`mooli-hairline--top-bottom`]: border,
    });

    return (
      <CollapseContext.Provider
        value={{
          value: curValue,
          border,
          accordion,
          onSwitch: this.onSwitch,
        }}
      >
        <div className={className2Use} {...rest}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const { props } = child;
              return React.cloneElement(child, {
                index,
                ...props,
              });
            }
            return null;
          })}
        </div>
      </CollapseContext.Provider>
    );
  }
}
