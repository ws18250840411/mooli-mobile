import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Loading from '../loading';
import Tabs from '../tabs/tabs';
import TabPane from '../tabs/tab-pane';
import { createClassName } from '../utils';

const componentClassName = createClassName('cascader');

export interface CascaderProps {
  title?: string;
  value?: string | number;
  defaultValue?: string | number;
  fieldNames?: any;
  placeholder?: string;
  activeColor?: string;
  options?: [];
  closeable?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (options: any) => void;
  onClose?: Function;
  onInput?: Function;
  onFinish?: Function;
}

interface CascaderStates {
  tabs: any[];
  activeTab: number;
}

export default class Cascader extends React.PureComponent<
  CascaderProps,
  CascaderStates
> {
  static displayName: 'Cascader';
  static propTypes = {
    title: PropTypes.string,
    fieldNames: PropTypes.object,
    placeholder: PropTypes.string,
    activeColor: PropTypes.string,
    lineColor: PropTypes.string,
    options: PropTypes.array,
    closeable: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    options: [],
    closeable: true,
    placeholder: '请选择',
  };
  public state: CascaderStates;
  constructor(props: CascaderProps) {
    super(props);
    this.state = {
      tabs: [],
      activeTab: 0,
    };
  }
  componentDidMount() {
    this.updateTabs();
  }
  componentDidUpdate(prevProps: any) {
    if (
      prevProps.options !== this.props.options ||
      prevProps.defaultValue !== this.props.defaultValue
    ) {
      this.updateTabs();
    }
  }
  get textKey() {
    return this.props.fieldNames?.text || 'text';
  }
  get valueKey() {
    return this.props.fieldNames?.value || 'value';
  }
  get childrenKey() {
    return this.props.fieldNames?.children || 'children';
  }
  getSelectedOptionsByValue(options: any, value: string | number) {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      if (option[this.valueKey] === value) {
        return [option];
      }

      if (option[this.childrenKey]) {
        const selectedOptions = this.getSelectedOptionsByValue(
          option[this.childrenKey],
          value,
        );
        if (selectedOptions) {
          return [option, ...selectedOptions];
        }
      }
    }
  }
  updateTabs = () => {
    const { options = [], value, defaultValue } = this.props;
    const curV = value || defaultValue;
    if (curV || curV === 0) {
      const selectedOptions = this.getSelectedOptionsByValue(options, curV);

      if (selectedOptions) {
        let optionsCursor = [...options];
        const curTabs = selectedOptions.map((option: any) => {
          const tab = {
            options: optionsCursor,
            selectedOption: option,
          };

          const next = optionsCursor.filter(
            (item) => item[this.valueKey] === option[this.valueKey],
          );
          if (next.length) {
            optionsCursor = next[0][this.childrenKey];
          }
          return tab;
        });
        if (optionsCursor) {
          curTabs.push({
            options: optionsCursor,
            selectedOption: null,
          });
        }
        this.setState(
          {
            tabs: curTabs,
          },
          () => {
            this.setState({
              activeTab: this.state.tabs.length - 1,
            });
          },
        );
        return;
      }
    }
    this.setState({
      tabs: [
        {
          options: options,
          selectedOption: null,
        },
      ],
    });
  };
  onClose = () => {
    const { onClose } = this.props;
    if (typeof onClose === 'function') onClose();
  };
  onSelect = (option: { [x: string]: any }, tabIndex: number) => {
    const { onInput, onChange, onFinish } = this.props;
    let cutTabs = [...this.state.tabs];
    cutTabs[tabIndex].selectedOption = option;
    if (cutTabs.length > tabIndex + 1) {
      cutTabs = cutTabs.slice(0, tabIndex + 1);
      this.setState({
        tabs: cutTabs,
      });
    }

    if (option[this.childrenKey]) {
      const nextTab = {
        options: option[this.childrenKey] || [],
        selectedOption: null,
      };

      if (cutTabs[tabIndex + 1]) {
        cutTabs[tabIndex + 1] = nextTab;
      } else {
        cutTabs.push(nextTab);
      }

      this.setState(
        {
          tabs: cutTabs,
          activeTab: tabIndex + 1,
        },
        () => {
          this.setState({
            // eslint-disable-next-line react/no-direct-mutation-state
            activeTab: this.state.activeTab++,
          });
        },
      );
    }

    const selectedOptions = cutTabs
      .map((tab) => tab.selectedOption)
      .filter((item) => !!item);

    const eventParams = {
      value: option[this.valueKey],
      tabIndex,
      selectedOptions,
    };

    if (typeof onInput === 'function') onInput(option[this.valueKey]);
    if (typeof onChange === 'function') onChange(eventParams);
    if (typeof onFinish === 'function' && !option[this.childrenKey])
      onFinish(eventParams);
  };
  renderHeader = () => {
    const { title, closeable } = this.props;
    return (
      <div className={createClassName(componentClassName, 'header')}>
        <h2 className={createClassName(componentClassName, 'title')}>
          {title}
        </h2>
        {closeable ? (
          <Icon
            name="cross"
            className={createClassName(componentClassName, 'close-icon')}
            onClick={this.onClose}
          />
        ) : null}
      </div>
    );
  };
  renderOptions = (
    options: any[],
    selectedOption: { [x: string]: any },
    tabIndex: any,
  ) => {
    const renderOption = (option: any) => {
      const isSelected =
        selectedOption &&
        option[this.valueKey] === selectedOption[this.valueKey];

      const optionClassName = createClassName(componentClassName, 'option');
      const className3Use: string = classnames(optionClassName, {
        selected: isSelected,
      });
      const curColor: any =
        this.props.activeColor && isSelected ? this.props.activeColor : null;

      return (
        <li
          key={option[this.valueKey]}
          className={className3Use}
          style={{ color: curColor }}
          onClick={() => {
            this.onSelect(option, tabIndex);
          }}
        >
          <span>{option[this.textKey]}</span>
          {isSelected ? (
            <Icon
              name="success"
              className={createClassName(componentClassName, 'selected-icon')}
            />
          ) : null}
        </li>
      );
    };

    return (
      <ul className={createClassName(componentClassName, 'options')}>
        {options.length > 0 ? (
          options.map(renderOption)
        ) : (
          <div className={createClassName(componentClassName, 'loading')}>
            <Loading color="#FED000" />
          </div>
        )}
      </ul>
    );
  };
  renderTab = (item: { options: any; selectedOption: any }, tabIndex: any) => {
    const { options, selectedOption } = item;
    const title = selectedOption
      ? selectedOption[this.textKey]
      : this.props.placeholder;

    const tabClassName = createClassName(componentClassName, 'tab');
    const className3Use: string = classnames(tabClassName, {
      unselected: !selectedOption,
    });
    return (
      <TabPane key="tabpane" title={title} className={className3Use}>
        {this.renderOptions(options, selectedOption, tabIndex)}
      </TabPane>
    );
  };
  renderTabs = () => {
    const tabsClassName = createClassName(componentClassName, 'tabs');

    return (
      <Tabs
        className={tabsClassName}
        value={this.state.activeTab}
        animated
        swipeable
        swipeThreshold={0}
        color={this.props.activeColor}
        onChange={(index) => this.setState({ activeTab: index })}
      >
        {this.state.tabs.map(this.renderTab)}
      </Tabs>
    );
  };
  render() {
    const { className } = this.props;

    const className2Use: string = classnames(componentClassName, className);
    return (
      <div className={className2Use}>
        {this.renderHeader()}
        {this.renderTabs()}
      </div>
    );
  }
}
