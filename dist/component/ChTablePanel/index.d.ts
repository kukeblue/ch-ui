import React from 'react';
import './index.less';
import { FormDataItem } from '../ChForm/index';
interface TablePanelProps {
  columns: Column[];
  dataSource?: any[];
  url: string;
  urlDelete?: string;
  urlAdd?: string;
  urlUpdate?: string;
  formData: FormDataItem[];
  searchFormData?: FormDataItem[];
  expandable?: {
    expandedRowRender: (item: Item) => React.ReactElement;
  };
  onEditFormat?: (item: any) => void;
  onEditBefore?: (item: Item) => void | boolean;
  onReloadAfter?: (item: any) => void;
  query?: Object;
  actions?: [
    {
      loading?: boolean;
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
  disablePagination?: boolean;
}
declare type Item = any;
declare type Column = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, ob: any) => JSX.Element;
  width?: number | string;
  fixed?: boolean;
};
declare const chTablePanel: React.ForwardRefExoticComponent<TablePanelProps &
  React.RefAttributes<unknown>>;
export default chTablePanel;
