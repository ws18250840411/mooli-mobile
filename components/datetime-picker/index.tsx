import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, isDate } from '../utils';
import {
  times,
  range,
  padZero,
  getTrueValue,
  getMonthEndDay,
} from './lib/utils';
import Picker, { PickerProps } from '../picker';

const currentYear = new Date().getFullYear();
export interface DatetimePickerProps extends PickerProps {
  value?: any;
  type?: string;
  filter?: Function;
  columnsOrder?: any[];
  showToolbar?: boolean;
  formatter?: Function;
  minDate?: Date;
  maxDate?: Date;
  minHour?: number;
  maxHour?: number;
  minMinute?: number;
  maxMinute?: number;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onChange?: Function;
  onConfirm?: Function;
  onCancel?: Function;
}

interface DatetimePickerStates {
  innerValue: any;
}

export default class DatetimePicker extends React.PureComponent<
  DatetimePickerProps,
  DatetimePickerStates
> {
  static displayName: 'DatePicker';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    type: 'datetime',
    showToolbar: true,
    minDate: new Date(currentYear - 10, 0, 1),
    maxDate: new Date(currentYear + 10, 11, 31),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    formatter: (_type: string, value: any) => value,
  };
  pickerRef: React.RefObject<any>;
  constructor(props: DatetimePickerProps) {
    super(props);
    this.state = {
      innerValue: this.formatValue(props.value),
    };
    this.pickerRef = React.createRef();
  }
  get ranges() {
    if (this.props.type === 'time') {
      return [
        {
          type: 'hour',
          range: [Number(this.props.minHour), Number(this.props.maxHour)],
        },
        {
          type: 'minute',
          range: [Number(this.props.minMinute), Number(this.props.maxMinute)],
        },
      ];
    }
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary(
      'max',
      this.state.innerValue ? this.state.innerValue : this.props.minDate,
    );
    const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary(
      'min',
      this.state.innerValue ? this.state.innerValue : this.props.minDate,
    );
    let result = [
      {
        type: 'year',
        range: [minYear, maxYear],
      },
      {
        type: 'month',
        range: [minMonth, maxMonth],
      },
      {
        type: 'day',
        range: [minDate, maxDate],
      },
      {
        type: 'hour',
        range: [minHour, maxHour],
      },
      {
        type: 'minute',
        range: [minMinute, maxMinute],
      },
    ];
    switch (this.props.type) {
      case 'date':
        result = result.slice(0, 3);
        break;
      case 'year-month':
        result = result.slice(0, 2);
        break;
      case 'month-day':
        result = result.slice(1, 3);
        break;
      case 'datehour':
        result = result.slice(0, 4);
        break;
    }

    if (this.props.columnsOrder) {
      const columnsOrder = this.props.columnsOrder.concat(
        // @ts-ignore
        result.map((column) => column.type),
      );
      result.sort(
        (a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type),
      );
    }

    return result;
  }
  get originColumns() {
    return this.ranges.map(({ type, range: rangeArr }) => {
      // @ts-ignore
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => {
        const value = padZero(rangeArr[0] + index);
        return value;
      });
      if (this.props.filter) {
        values = this.props.filter(type, values);
      }

      return {
        type,
        values,
      };
    });
  }
  get columns() {
    return this.originColumns.map((column) => ({
      values: column.values.map((value) =>
        this.props.formatter!(column.type, value),
      ),
    }));
  }
  getPicker() {
    return this.pickerRef.current;
  }
  componentDidMount() {
    setTimeout(() => this.updateDateTime());
  }
  componentDidUpdate(prevProps: any) {
    if (!!this.props.value && prevProps.value !== this.props.value) {
      this.setState(
        {
          innerValue: this.formatValue(this.props.value),
        },
        () => {
          this.updateColumnValue();
        },
      );
    }
  }
  updateDateTime = () => {
    this.updateColumnValue();
    this.updateInnerValue();
  };
  updateColumnValue = () => {
    const { type, formatter, minDate } = this.props;
    let values: any;
    if (type === 'time') {
      const pair = this.state.innerValue.split(':');
      if (formatter) {
        values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      }
    } else {
      const value = this.state.innerValue ? this.state.innerValue : minDate;
      values = this.originColumns.map((column) => {
        switch (column.type) {
          case 'year':
            return formatter && formatter('year', `${value.getFullYear()}`);
          case 'month':
            return (
              formatter && formatter('month', padZero(value.getMonth() + 1))
            );
          case 'day':
            return formatter && formatter('day', padZero(value.getDate()));
          case 'hour':
            return formatter && formatter('hour', padZero(value.getHours()));
          case 'minute':
            return (
              formatter && formatter('minute', padZero(value.getMinutes()))
            );
          default:
            return null;
        }
      });
    }
    if (this.pickerRef.current) {
      this.pickerRef.current.setValues(values);
    }
  };
  updateInnerValue = () => {
    const { type } = this.props;
    if (type === 'time') {
      const [hourIndex, minuteIndex] = this.getPicker().getIndexes();
      const [hourColumn, minuteColumn] = this.originColumns;

      const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];
      this.setState({
        innerValue: this.formatValue(`${hour}:${minute}`),
      });
    } else {
      const indexes = this.getPicker().getIndexes();
      const getValue = (type: string) => {
        let index = 0;
        this.originColumns.forEach((column, columnIndex) => {
          if (type === column.type) {
            index = columnIndex;
          }
        });
        const { values } = this.originColumns[index];
        return getTrueValue(values[indexes[index]]);
      };

      let year: number;
      let month: number;
      let day: number;
      if (type === 'month-day') {
        year = (
          this.state.innerValue ? this.state.innerValue : this.props.minDate
        ).getFullYear();
        month = getValue('month');
        day = getValue('day');
      } else {
        year = getValue('year');
        month = getValue('month');
        day = type === 'year-month' ? 1 : getValue('day');
      }

      const maxDay = getMonthEndDay(year, month);
      day = day > maxDay ? maxDay : day;

      let hour = 0;
      let minute = 0;

      if (type === 'datehour') {
        hour = getValue('hour');
      }

      if (type === 'datetime') {
        hour = getValue('hour');
        minute = getValue('minute');
      }

      const value = new Date(year, month - 1, day, hour, minute);
      this.setState({
        innerValue: this.formatValue(value),
      });
    }
  };
  getBoundary = (
    type: string,
    value: {
      getFullYear: () => number;
      getMonth: () => number;
      getDate: () => number;
      getHours: () => number;
    },
  ) => {
    const boundary = this.props[`${type}Date`];
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (type === 'max') {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
    };
  };
  formatValue = (value: any) => {
    const {
      type,
      minMinute = 0,
      minHour = 0,
      maxHour = 23,
      maxMinute = 59,
    } = this.props;
    if (type === 'time') {
      if (!value) {
        value = `${padZero(minHour)}:${padZero(minMinute)}`;
      }

      let [hour, minute] = value.split(':');
      hour = padZero(range(hour, minHour, maxHour));
      minute = padZero(range(minute, minMinute, maxMinute));

      return `${hour}:${minute}`;
    } else {
      if (!isDate(value)) {
        return null;
      }
      // @ts-ignore
      value = Math.max(value, this.props.minDate.getTime());
      // @ts-ignore
      value = Math.min(value, this.props.maxDate.getTime());

      return new Date(value);
    }
  };
  onChange = (picker: Picker) => {
    const { onChange } = this.props;
    this.updateInnerValue();
    if (typeof onChange === 'function') {
      onChange(picker);
    }
  };
  onConfirm = () => {
    const { onConfirm } = this.props;
    if (typeof onConfirm === 'function') {
      onConfirm(this.state.innerValue);
    }
  };

  render() {
    const { className, onChange, onConfirm, ...rest } = this.props;
    const componentClassName = createClassName('date-picker');
    const className2Use: string = classnames(componentClassName, className);
    return (
      <Picker
        ref={this.pickerRef}
        className={className2Use}
        columns={this.columns}
        onChange={this.onChange}
        onConfirm={this.onConfirm}
        {...rest}
      />
    );
  }
}
