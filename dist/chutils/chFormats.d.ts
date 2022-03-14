declare function formatDate(time: number, format?: string): string;
declare const _default: {
  deleteObjectEmptyKey: (data: any) => void;
  phoneNumberHideMiddle: (no: string | number) => string | number;
  emailHideMiddle: (email: string) => string;
  formatDate: typeof formatDate;
};
export default _default;
