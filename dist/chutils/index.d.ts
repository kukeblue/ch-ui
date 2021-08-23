declare const ChUtils: {
  chHooks: {
    usePage: typeof import('./chHooks').usePage;
    useOptionFormListHook: typeof import('./chHooks').useOptionFormListHook;
  };
  chFormats: {
    deleteObjectEmptyKey: (data: any) => void;
  };
  Ajax: {
    RequestConfig: {
      config?: Object | undefined;
      onRequest?: Function | undefined;
      onError?: ((e: import('axios').AxiosError<any>) => void) | undefined;
    };
    request: (requestPrams: {
      url: string;
      data: any;
      cache?: boolean | undefined;
      method?: import('axios').Method | undefined;
    }) => Promise<unknown>;
  };
};
export default ChUtils;
