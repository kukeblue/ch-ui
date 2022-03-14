import './index.less';
export interface IChDatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}
declare function ChDatePicker(props: IChDatePickerProps): JSX.Element;
export default ChDatePicker;
