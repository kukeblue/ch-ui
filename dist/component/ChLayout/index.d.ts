import './index.less';
export interface SiderItem {
  icon: JSX.Element;
  text: string;
  click: () => void;
}
export interface Sider {
  siderItems?: SiderItem[];
  currentItem?: number;
}
export interface ChLayoutProps {
  children?: JSX.Element | string;
  header?: JSX.Element | string;
  adminIcon?: JSX.Element | string;
  siderItems?: SiderItem[];
  sider: Sider;
}
declare const _default: (props: ChLayoutProps) => JSX.Element;
export default _default;
