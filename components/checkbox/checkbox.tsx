import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { createClassName, addUnit } from '../utils';
import CheckboxContext from './lib/context';
import CheckboxGroup from './checkbox-group';

const componentClassName = createClassName('checkbox');
export interface CheckboxProps {
  name?: string;
  value?: any;
  disabled?: boolean;
  icon?: Function;
  iconSize?: string;
  checkedColor?: string;
  labelPosition?: string;
  labelDisabled?: boolean;
  shape?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
}

export default class Checkbox extends React.PureComponent<CheckboxProps> {
  static Group: typeof CheckboxGroup;
  static displayName: 'Checkbox';
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.func,
    iconSize: PropTypes.string,
    checkedColor: PropTypes.string,
    labelPosition: PropTypes.string,
    labelDisabled: PropTypes.bool,
    shape: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    labelPosition: 'right',
    shape: 'round',
  };
  static contextType = CheckboxContext;
  protected iconRef: React.RefObject<HTMLDivElement>;
  constructor(props: CheckboxProps) {
    super(props);
    this.iconRef = React.createRef<HTMLDivElement>();
  }
  get isDisabled() {
    return this.context.disabled || this.props.disabled;
  }
  get currentValue() {
    return this.context.value || this.props.value;
  }
  get checked() {
    if (this.props.name) {
      return (
        this.currentValue && this.currentValue.indexOf(this.props.name) !== -1
      );
    } else {
      return this.currentValue;
    }
  }
  iconStyle = () => {
    const curCheckedColor =
      this.props.checkedColor || this.context.checkedColor;
    if (curCheckedColor && this.checked && !this.isDisabled) {
      return {
        borderColor: curCheckedColor,
        backgroundColor: curCheckedColor,
      };
    }
  };

  onClick = (event: { target: any }) => {
    const { target } = event;
    const { labelDisabled, name, onChange } = this.props;
    const icon = this.iconRef.current;
    if (icon) {
      const iconClicked = icon === target || icon.contains(target);
      if (!this.isDisabled && (iconClicked || !labelDisabled)) {
        let value: any;
        if (name) {
          if (Array.isArray(this.currentValue)) {
            value = this.currentValue.slice();
            const index = value.indexOf(name);
            if (index === -1) {
              value.push(name);
            } else {
              value.splice(index, 1);
            }
            if (this.context.max && value.length > this.context.max) {
              return;
            }
          } else {
            value = name;
          }
        } else {
          value = !this.currentValue;
        }
        onChange && onChange(value);
        this.context.onSwitch && this.context.onSwitch(value);
      }
    }
  };

  genIcon = () => {
    const { icon, iconSize, shape } = this.props;
    const curIconSize = iconSize || this.context.iconSize;
    const iconClassName = createClassName(componentClassName, 'icon');
    const className3Use: string = classnames(iconClassName, {
      [`${iconClassName}--${shape}`]: shape,
      [`${iconClassName}--disabled`]: this.isDisabled,
      [`${iconClassName}--checked`]: this.checked,
    });

    const customRender = icon && icon(this.checked);
    const iconRender = customRender && <>{customRender}</>;

    return (
      <div
        ref={this.iconRef}
        key="checkbox-icon"
        style={{ fontSize: addUnit(curIconSize) }}
        className={className3Use}
      >
        {iconRender || <Icon name="success" style={this.iconStyle()} />}
      </div>
    );
  };

  genLabel = () => {
    const { labelPosition, children } = this.props;
    const labelClassName = createClassName(componentClassName, 'label');
    const className3Use: string = classnames(labelClassName, {
      [`${labelClassName}--${labelPosition}`]: labelPosition,
      [`${labelClassName}--disabled`]: this.isDisabled,
    });
    return (
      <span key="Checkbox-label" className={className3Use}>
        {children}
      </span>
    );
  };

  render() {
    const {
      value,
      name,
      icon,
      iconSize,
      disabled,
      checkedColor,
      labelPosition = 'right',
      labelDisabled,
      shape = 'round',
      className,
      style,
      children,
      onChange,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${this.context.direction}`]:
        this.context.direction,
      [`${componentClassName}--disabled`]: this.isDisabled,
      [`${componentClassName}--label-disabled`]: labelDisabled,
    });

    const child = [this.genIcon()];
    if (labelPosition === 'left') {
      child.unshift(this.genLabel());
    } else {
      child.push(this.genLabel());
    }

    return (
      <div
        className={className2Use}
        onClick={this.onClick}
        style={style}
        {...rest}
      >
        {child}
      </div>
    );
  }
}

// export const Checkbox: React.FC<CheckboxProps> = (props) => {
//   const {
//     value,
//     name,
//     icon,
//     iconSize,
//     disabled,
//     checkedColor,
//     labelPosition = 'right',
//     labelDisabled,
//     shape = 'round',
//     className,
//     style,
//     children,
//     onChange,
//     ...rest
//   } = props;

//   const iconRef = React.useRef<HTMLDivElement>(null);

//   const context = React.useContext(CheckboxContext);

//   const isDisabled = React.useMemo(() => {
//     return context.disabled || props.disabled;
//   }, [context.disabled, props.disabled]);

//   const currentValue = React.useMemo(() => {
//     return context.value || props.value;
//   }, [context.value, props.value]);

//   const checked = React.useMemo(() => {
//     if (name) {
//       return currentValue && currentValue.indexOf(name) !== -1;
//     } else {
//       return currentValue;
//     }
//   }, [currentValue, name]);

//   const iconStyle = () => {
//     const curCheckedColor = props.checkedColor || context.checkedColor;
//     if (curCheckedColor && checked && !isDisabled) {
//       return {
//         borderColor: curCheckedColor,
//         backgroundColor: curCheckedColor,
//       };
//     }
//   };

//   const componentClassName = createClassName('checkbox');
//   const className2Use: string = classnames(componentClassName, className, {
//     [`${componentClassName}--${context.direction}`]: context.direction,
//     [`${componentClassName}--disabled`]: isDisabled,
//     [`${componentClassName}--label-disabled`]: labelDisabled,
//   });

//   const onClick = (event: { target: any }) => {
//     const { target } = event;
//     const icon = iconRef.current;
//     if (icon) {
//       const iconClicked = icon === target || icon.contains(target);
//       if (!isDisabled && (iconClicked || !labelDisabled)) {
//         let value: any;
//         if (name) {
//           if (Array.isArray(currentValue)) {
//             value = currentValue.slice();
//             const index = value.indexOf(name);
//             if (index === -1) {
//               value.push(name);
//             } else {
//               value.splice(index, 1);
//             }
//             if (context.max && value.length > context.max) {
//               return;
//             }
//           } else {
//             value = name;
//           }
//         } else {
//           value = !currentValue;
//         }
//         onChange && onChange(value);
//         context.onSwitch && context.onSwitch(value);
//       }
//     }
//   };

//   const genIcon = () => {
//     const curIconSize = props.iconSize || context.iconSize;
//     const iconClassName = createClassName(componentClassName, 'icon');
//     const className3Use: string = classnames(iconClassName, {
//       [`${iconClassName}--${shape}`]: shape,
//       [`${iconClassName}--disabled`]: isDisabled,
//       [`${iconClassName}--checked`]: checked,
//     });

//     const customRender = icon && icon(checked);
//     const iconRender = customRender && <>{customRender}</>;

//     return (
//       <div
//         ref={iconRef}
//         key="checkbox-icon"
//         style={{ fontSize: addUnit(curIconSize) }}
//         className={className3Use}
//       >
//         {iconRender || <Icon name="success" style={iconStyle()} />}
//       </div>
//     );
//   };

//   const genLabel = () => {
//     const labelClassName = createClassName(componentClassName, 'label');
//     const className3Use: string = classnames(labelClassName, {
//       [`${labelClassName}--${labelPosition}`]: labelPosition,
//       [`${labelClassName}--disabled`]: isDisabled,
//     });
//     return (
//       <span key="Checkbox-label" className={className3Use}>
//         {children}
//       </span>
//     );
//   };

//   const child = [genIcon()];
//   if (labelPosition === 'left') {
//     child.unshift(genLabel());
//   } else {
//     child.push(genLabel());
//   }

//   return (
//     <div className={className2Use} onClick={onClick} style={style} {...rest}>
//       {child}
//     </div>
//   );
// };

// Checkbox.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   children: PropTypes.node,
// };

// Checkbox.displayName = 'Checkbox';
