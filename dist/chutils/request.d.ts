import { Method, AxiosError } from 'axios';
export interface ChResponse<T> {
  list?: T[];
  status: number;
  errorCode: string;
  errorMsg: string;
  message: string;
  page: {
    pageNo: number;
    pageSize: number;
    total: number;
    pages: number;
    list: T[];
  };
  result: null;
}
export interface ChCommonResponse {
  list: [];
  status: number;
  errorCode: string;
  errorMsg: string;
  message: string;
  page: {
    pageNo: number;
    pageSize: number;
    total: number;
    pages: number;
    list: [];
  };
  result: null;
}
export declare const RequestConfig: {
  config?: Object;
  onRequest?: Function;
  onError?: (e: AxiosError) => void;
};
export declare const request: (requestPrams: {
  url: string;
  data: any;
  cache?: boolean;
  method?: Method;
}) => Promise<unknown>;
declare const Ajax: {
  RequestConfig: {
    config?: Object | undefined;
    onRequest?: Function | undefined;
    onError?: ((e: AxiosError) => void) | undefined;
  };
  request: (requestPrams: {
    url: string;
    data: any;
    cache?: boolean;
    method?: Method;
  }) => Promise<unknown>;
};
export default Ajax;
