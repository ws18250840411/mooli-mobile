import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Search, { SearchProps } from '../search';
import Option, { OptionProps } from './option';
import JSearch from './lib/Search';
export interface SelectProps extends SearchProps {
  options?: OptionProps[];
  filterable?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onCompleted?: (item?: OptionProps) => void;
}

export interface SelectStates {
  value: string;
  curSelected: OptionProps;
  options: OptionProps[];
}

export default class Select extends React.PureComponent<
  SelectProps,
  SelectStates
> {
  static displayName: 'Select';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    filterable: PropTypes.bool,
    options: PropTypes.array,
  };
  static defaultProps = {};
  static Option: typeof Option;
  search: JSearch;
  options: any[];
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      value: '',
      options: [],
      curSelected: {
        value: '',
        label: '',
      },
    };
    this.search = new JSearch('value', 'label');
  }

  componentDidMount() {
    this.renderOptions();
  }

  renderOptions = () => {
    const { value, options = [], children } = this.props;
    const curOptions: any[] = [];
    if (children) {
      // eslint-disable-next-line no-inner-declarations
      function returnChildren(child: any) {
        if (child.props) {
          return returnChildren(child.props.children);
        }
        return child;
      }
      const chiles = React.Children.toArray(children).map((child) => {
        if (React.isValidElement(child)) {
          if (child.props.children) {
            return {
              label: returnChildren(child.props.children),
              value: child.props.value,
            };
          } else {
            return {
              label: child.props.label,
              value: child.props.value,
            };
          }
        }
        return child;
      });
      curOptions.push(...chiles);
    }
    if (options.length > 0) {
      curOptions.push(...options);
    }
    this.search.reset(curOptions);
    this.options = curOptions;
    this.setState({
      options: curOptions,
    });
    for (let index = 0; index < this.options.length; index++) {
      const item = this.options[index];
      if (item.value === value) {
        this.setState({
          curSelected: item,
        });
      }
    }
  };
  render() {
    const {
      value,
      options = [],
      filterable = false,
      className,
      children,
      onInput,
      onChange,
      onSearch,
      onCancel,
      onClear,
      onCompleted,
      ...rest
    } = this.props;
    const componentClassName = createClassName('select');
    const className2Use: string = classnames(componentClassName, className);

    return (
      <div className={className2Use}>
        <Search
          value={this.state.value}
          clearableIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.4697 4.46967C10.7626 4.17678 11.2374 4.17678 11.5303 4.46967C11.7966 4.73594 11.8208 5.1526 11.6029 5.44621L11.5303 5.53033L9.06066 8L11.5303 10.4697C11.8232 10.7626 11.8232 11.2374 11.5303 11.5303C11.2641 11.7966 10.8474 11.8208 10.5538 11.6029L10.4697 11.5303L8 9.06066L5.53033 11.5303C5.23744 11.8232 4.76256 11.8232 4.46967 11.5303C4.2034 11.2641 4.1792 10.8474 4.39705 10.5538L4.46967 10.4697L6.93934 8L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L8 6.93934L10.4697 4.46967Z"
                fill="#999999"
              />
            </svg>
          }
          onChange={(value) => {
            if (filterable) {
              let options = value ? this.search.search(value) : this.options;
              this.setState({
                options,
              });
            }
            this.setState({ value });
          }}
          onCancel={() => {
            onCompleted && onCompleted(this.state.curSelected);
          }}
          onClear={(e) => {
            this.setState({
              curSelected: { value: '', label: '' },
              value: '',
            });
            onClear && onClear(e);
          }}
          {...rest}
        />
        <div className="mooli-options">
          {this.state.options.map((item, i) => (
            <Option
              key={i}
              value={item.value}
              label={item.label}
              selected={item.value === this.state.curSelected.value}
              onPress={({ value, label }) => {
                this.setState({ curSelected: { value, label } });
                onChange && onChange({ value, label });
              }}
            >
              {item.label}
            </Option>
          ))}
        </div>
      </div>
    );
  }
}
