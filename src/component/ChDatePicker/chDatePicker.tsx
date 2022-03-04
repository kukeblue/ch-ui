import React from 'react';
import './index.less';
import { Button, DatePicker } from 'antd';
import moment from 'moment';

const format = 'YYYY-MM-DD';

export interface IChDatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function ChDatePicker(props: IChDatePickerProps) {
  const value = props.value ? moment(props.value) : null;
  return (
    <DatePicker
      placeholder={props.placeholder}
      style={{ width: '100%' }}
      value={value}
      onChange={(date, dateStr) => props.onChange && props.onChange(dateStr)}
    />
  );
}

export default ChDatePicker;
