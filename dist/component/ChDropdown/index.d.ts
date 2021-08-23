import './index.less';
export interface MenuItem {
  text: string;
  click?: () => boolean;
}
export interface ChDropdownProps {
  menuItems?: MenuItem[];
  text: JSX.Element | string;
  className?: string;
  itemClassName?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
}
declare const _default: (props: ChDropdownProps) => JSX.Element;
export default _default;
