import React from 'react';
import './index.less';
import { FormDataItem } from '../ChForm/index';
interface TablePanelProps {
  columns: Column[];
  url: string;
  urlDelete: string;
  urlAdd: string;
  urlUpdate: string;
  formData: FormDataItem[];
  searchFormData?: FormDataItem[];
  expandable?: {
    expandedRowRender: (item: Item) => React.ReactElement;
  };
  onEditFormat?: (item: any) => void;
  onEditBefore?: (item: Item) => void | boolean;
  query?: Object;
  actions?: [
    {
      type?:
        | 'text'
        | 'link'
        | 'ghost'
        | 'default'
        | 'primary'
        | 'dashed'
        | undefined;
      text: string;
      onClick: () => void;
    },
  ];
}
declare type Item = any;
declare type Column = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, ob: any) => JSX.Element;
};
declare const chTablePanel: React.ForwardRefExoticComponent<TablePanelProps &
  React.RefAttributes<unknown>>;
export default chTablePanel;
