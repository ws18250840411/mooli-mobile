import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import { PickerColumn } from './column';
import { createClassName, isObject, unitToPx } from '../utils';

const DEFAULT_ITEM_HEIGHT = 44;
const componentClassName = createClassName('picker');

export interface BaseSharedProps {
  title?: string;
  description?: string | React.ReactNode;
  loading?: boolean;
  itemHeight?: number;
  showToolbar?: boolean;
  visibleItemCount?: number;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export interface PickerProps extends BaseSharedProps {
  readonly?: boolean;
  allowHtml?: boolean;
  swipeDuration?: number;
  defaultIndex?: number;
  columnsTop?: React.ReactNode;
  columns?: any[];
  columnsBottom?: React.ReactNode;
  option?: React.ReactNode;
  confirm?: React.ReactNode;
  cancel?: React.ReactNode;
  toolbarPosition?: 'top' | 'bottom';
  valueKey?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onConfirm?: Function;
  onCancel?: Function;
  onChange?: Function;
}
export default class Picker extends React.PureComponent<PickerProps> {
  static propTypes = {
    readonly: PropTypes.bool,
    defaultIndex: PropTypes.number,
    columns: PropTypes.array,
    toolbarPosition: PropTypes.string,
    valueKey: PropTypes.string,
  };
  static defaultProps = {
    defaultIndex: 0,
    columns: [],
    allowHtml: true,
    visibleItemCount: 6,
    swipeDuration: 1000,
    toolbarPosition: 'top',
    valueKey: 'text',
    cancelButtonText: '取消',
    confirmButtonText: '确认',
  };
  private collect: any[];
  constructor(props: PickerProps) {
    super(props);
    this.collect = [];
  }
  get itemPxHeight() {
    const { itemHeight } = this.props;
    return itemHeight ? unitToPx(itemHeight) : DEFAULT_ITEM_HEIGHT;
  }
  get dataType() {
    const { columns = [] } = this.props;
    const firstColumn: any = columns[0] || {};
    if (firstColumn.children) {
      return 'cascade';
    }
    if (firstColumn.values) {
      return 'object';
    }
    return 'text';
  }
  setCollect = (instance: any, destroy?: boolean) => {
    if (destroy) {
      this.collect.splice(this.collect.indexOf(instance), 1);
    } else {
      this.collect.push(instance);
    }
  };
  format = () => {
    const { columns } = this.props;
    let curColumns: any;
    if (this.dataType === 'text') {
      curColumns = [{ values: columns }];
    } else if (this.dataType === 'cascade') {
      curColumns = this.formatCascade();
    } else {
      curColumns = columns;
    }
    return curColumns;
  };
  formatCascade = () => {
    const formatted: any = [];
    let cursor: any = { children: this.props.columns };
    while (cursor && cursor.children) {
      const { children } = cursor;
      let defaultIndex = cursor.defaultIndex ?? Number(this.props.defaultIndex);
      while (children[defaultIndex] && children[defaultIndex].disabled) {
        if (defaultIndex < children.length - 1) {
          defaultIndex++;
        } else {
          defaultIndex = 0;
          break;
        }
      }
      formatted.push({
        values: cursor.children,
        className: cursor.className,
        defaultIndex,
      });
      cursor = children[defaultIndex];
    }
    return formatted;
  };
  getColumn(index: number) {
    return this.collect[index];
  }
  getColumnValue = (index: number) => {
    const column = this.getColumn(index);
    return column && column.getValue();
  };
  getColumnValues = (index: number) => {
    return (this.collect[index] || {}).options;
  };
  getColumnIndex = (columnIndex: number) => {
    return (this.getColumn(columnIndex) || {}).currentIndex;
  };
  getValues = () => {
    return this.collect.map((child) => child.getValue());
  };
  getIndexes = () => {
    return this.collect.map((child) => child.currentIndex);
  };
  setValues = (values: any[]) => {
    values.forEach((value, index) => {
      this.setColumnValue(index, value);
    });
  };
  setIndexes = (indexes: any[]) => {
    indexes.forEach((optionIndex, columnIndex) => {
      this.setColumnIndex(columnIndex, optionIndex);
    });
  };
  setColumnValue = (index: number, value: any) => {
    const column = this.getColumn(index);
    if (column) {
      column.setValue(value);
      if (this.dataType === 'cascade') {
        this.onCascadeChange(index);
      }
    }
  };
  setColumnIndex = (columnIndex: number, optionIndex: any) => {
    const column = this.getColumn(columnIndex);
    if (column) {
      column.setIndex(optionIndex);
      if (this.dataType === 'cascade') {
        this.onCascadeChange(columnIndex);
      }
    }
  };
  setColumnValues(index: number, options: any[]) {
    const column = this.collect[index];
    if (column) {
      column.setOptions(options);
    }
  }
  onCascadeChange = (columnIndex: number) => {
    let cursor: any = { children: this.props.columns };
    const indexes = this.getIndexes();
    for (let i = 0; i <= columnIndex; i++) {
      cursor = cursor.children[indexes[i]];
    }
    while (cursor && cursor.children) {
      columnIndex++;
      this.setColumnValues(columnIndex, cursor.children);
      cursor = cursor.children[cursor.defaultIndex || 0];
    }
  };
  change = (columnIndex: number) => {
    const { valueKey = 'text', onChange } = this.props;
    // 联动
    if (this.dataType === 'cascade') {
      this.onCascadeChange(columnIndex);
    }

    let values: any = this.getValues();
    let colIndex: number = columnIndex;
    if (this.dataType === 'cascade') {
      values = values.map((item: any) => item[valueKey]);
    } else if (this.dataType === 'text') {
      values = this.getColumnValue(0);

      if (isObject(values)) {
        values = JSON.stringify(values);
      }

      colIndex = this.getColumnIndex(0);
    }
    onChange && onChange(this, values, colIndex);
  };
  confirm = () => {
    this.collect.forEach((child) => child.stopMomentum());
    this.emit('onConfirm');
  };
  cancel = () => {
    this.emit('onCancel');
  };
  emit = (event: string) => {
    const { valueKey = 'text' } = this.props;
    let values: any = this.getValues();
    let colIndex: any = this.getIndexes();
    if (this.dataType === 'text') {
      values = this.getColumnValue(0);

      if (isObject(values)) {
        values = JSON.stringify(values);
      }

      colIndex = this.getColumnIndex(0);
    } else if (this.dataType === 'cascade') {
      values = values.map((item: any) => item[valueKey]);
    }
    // @ts-ignore
    this.props[event] && this.props[event](values, colIndex);
  };

  genLoading = () => {
    if (this.props.loading) {
      return (
        <Loading className={createClassName(componentClassName, 'loading')} />
      );
    }
    return null;
  };
  genTitle = () => {
    const { title } = this.props;
    if (title) {
      if (React.isValidElement(title)) return title;
      const titleClassName = createClassName(componentClassName, 'title');
      const className3Use: string = classnames(
        titleClassName,
        'mooli-ellipsis',
      );
      return (
        <div key="picker-title" className={className3Use}>
          {title}
        </div>
      );
    }
    return null;
  };
  genCancel = () => {
    const { cancel, cancelButtonText } = this.props;
    if (cancel || cancelButtonText) {
      return (
        <button
          key="picker-cancel"
          type="button"
          className={createClassName(componentClassName, 'cancel')}
          onClick={this.cancel}
        >
          {cancel || cancelButtonText}
        </button>
      );
    }
    return null;
  };
  genConfirm = () => {
    const { confirm, confirmButtonText } = this.props;
    if (confirm || confirmButtonText) {
      return (
        <button
          key="picker-confirm"
          type="button"
          className={createClassName(componentClassName, 'confirm')}
          onClick={this.confirm}
        >
          {confirm || confirmButtonText}
        </button>
      );
    }
    return null;
  };
  genToolbar = () => {
    const { showToolbar, children } = this.props;
    if (showToolbar) {
      return (
        <>
          <div className={createClassName(componentClassName, 'toolbar')}>
            {children || [this.genCancel(), this.genTitle(), this.genConfirm()]}
          </div>
          {this.genDescription()}
        </>
      );
    }
    return null;
  };
  genDescription = () => {
    const { description } = this.props;
    if (description) {
      return (
        <div className={createClassName(componentClassName, 'description')}>
          {description}
        </div>
      );
    }
    return null;
  };
  genColumns = () => {
    const { visibleItemCount = 6 } = this.props;
    const wrapHeight = this.itemPxHeight * visibleItemCount;
    const frameStyle = { height: `${this.itemPxHeight}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - this.itemPxHeight) / 2}px`,
    };

    return (
      <div
        className={createClassName(componentClassName, 'columns')}
        style={columnsStyle}
      >
        {this.genColumnItems()}
        <div
          className={createClassName(componentClassName, 'mask')}
          style={maskStyle}
        />
        <div
          className={classnames(
            createClassName(componentClassName, 'frame'),
            'mooli-hairline-unset--top-bottom',
          )}
          style={frameStyle}
        />
      </div>
    );
  };
  genColumnItems = () => {
    const {
      readonly,
      valueKey = 'text',
      allowHtml,
      defaultIndex,
      swipeDuration = 1000,
      visibleItemCount = 6,
    } = this.props;
    const formattedColumns = this.format();

    return formattedColumns.map((item: any, columnIndex: number) => (
      <PickerColumn
        key={columnIndex}
        readonly={readonly}
        valueKey={valueKey}
        allowHtml={allowHtml}
        swipeDuration={swipeDuration}
        visibleItemCount={visibleItemCount}
        initialOptions={item.values}
        defaultIndex={item.defaultIndex ?? Number(defaultIndex)}
        itemHeight={this.itemPxHeight}
        onCollect={(ins: any, des: boolean) => this.setCollect(ins, des)}
        onChange={() => {
          this.change(columnIndex);
        }}
      />
    ));
  };

  render() {
    const { toolbarPosition, columnsTop, columnsBottom, className } =
      this.props;
    const componentClassName = createClassName('picker');
    const className2Use: string = classnames(componentClassName, className);
    return (
      <div className={className2Use}>
        {toolbarPosition === 'top' && this.genToolbar()}
        {this.genLoading()}
        {typeof columnsTop === 'function' ? columnsTop() : columnsTop}
        {this.genColumns()}
        {typeof columnsBottom === 'function' ? columnsBottom() : columnsBottom}
        {toolbarPosition === 'bottom' && this.genToolbar()}
      </div>
    );
  }
}
