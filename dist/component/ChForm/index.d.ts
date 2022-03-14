import React from 'react';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import './index.less';
import { Rule } from 'rc-field-form/lib/interface';
export declare enum FormItemType {
  date = 'date',
  input = 'input',
  password = 'password',
  radioGroup = 'radio-group',
  select = 'select',
  upload = 'upload',
  multipleSelect = 'mutipleSelect',
  regionSelect = 'region-select',
  other = 'other',
}
declare type CheckboxValueType = string | number;
interface FormItemOptionsType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
}
export interface FormDataItem {
  key?: string;
  placeholder?: string;
  itemshow?: (editor?: any, form?: FormInstance<any>) => boolean;
  type: FormItemType;
  inputtype?: string;
  label: string;
  name: string;
  rules?: Rule[];
  options?: FormItemOptionsType[];
  initialValue?: any;
  valuePropName?: string;
  getValueFromEvent?: (e: any) => any;
  uploadurl?: string;
  uploadType?: 'picture' | 'text' | 'picture-card' | undefined;
  uploadname?: string;
  uploadheader?: any;
  layout?: {
    span?: number;
    offset?: number;
  };
  dom?: JSX.Element;
}
interface ChFormProps {
  preserve?: boolean;
  className?: string;
  showclear?: boolean;
  submitname?: string;
  formData: FormDataItem[];
  onFinish?: (values: any) => void;
  form?: FormInstance<any>;
  editor?: any;
  layout?: {
    labelCol?: {
      span?: number;
      offset?: number;
    };
    wrapperCol?: {
      span?: number;
      offset?: number;
    };
  };
}
declare const _default: ({
  preserve,
  formData,
  onFinish,
  form,
  editor,
  layout,
  submitname,
  showclear,
  className,
}: ChFormProps) => JSX.Element;
export default _default;
