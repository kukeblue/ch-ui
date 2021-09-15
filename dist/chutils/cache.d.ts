export declare const setObCache: (
  key: string,
  value: any,
  _expiresTime?: number | undefined,
) => void;
export declare const getObCache: (key: string) => any;
export declare const clearObCache: (key: string) => void;
declare const _default: {
  setObCache: (
    key: string,
    value: any,
    _expiresTime?: number | undefined,
  ) => void;
  getObCache: (key: string) => any;
  clearObCache: (key: string) => void;
};
export default _default;
