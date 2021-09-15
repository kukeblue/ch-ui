declare const ChUtils: {
  chHooks: {
    usePage: typeof import('./chHooks').usePage;
    useOptionFormListHook: typeof import('./chHooks').useOptionFormListHook;
    useInterval: (callback: () => void, delay: number | null) => void;
  };
  chFormats: {
    deleteObjectEmptyKey: (data: any) => void;
    phoneNumberHideMiddle: (no: string | number) => string | number;
    emailHideMiddle: (email: string) => string;
    formatDate: (time: number, format?: string) => string;
  };
  Ajax: {
    RequestConfig: {
      config?: Object | undefined;
      onRequest?: Function | undefined;
      onError?: ((e: import('axios').AxiosError<any>) => void) | undefined;
      onResponse?: ((data: any) => void) | undefined;
    };
    request: (requestPrams: {
      url: string;
      data?: any;
      cache?: boolean | undefined;
      method?: import('axios').Method | undefined;
    }) => Promise<any>;
  };
  chValidator: {
    validatePhone: (phoneNumber: string | number) => boolean;
  };
  chCache: {
    setObCache: (
      key: string,
      value: any,
      _expiresTime?: number | undefined,
    ) => void;
    getObCache: (key: string) => any;
    clearObCache: (key: string) => void;
  };
};
export default ChUtils;
