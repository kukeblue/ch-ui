/// <reference types="react" />
interface usePageProps {
  url: string;
  pageSize: number;
  query: Object;
  onReloadAfter?: (res: any) => void;
}
export declare function usePage(
  props: usePageProps,
): {
  list: never[];
  setList: import('react').Dispatch<import('react').SetStateAction<never[]>>;
  status: string;
  setStatus: import('react').Dispatch<import('react').SetStateAction<string>>;
  reload: (pageNo?: number | undefined) => Promise<void>;
  loadMore: () => Promise<void>;
  total: number;
  setQuery: import('react').Dispatch<any>;
};
interface useOptionFormListHookProps {
  url: string;
  query?: Object;
  expiresTime?: number;
}
interface Options {
  label: string;
  value: string;
}
export declare function useOptionFormListHook(
  props: useOptionFormListHookProps,
): {
  list: never[];
  optionsMap: any;
  options: Options[];
};
declare const chHooks: {
  usePage: typeof usePage;
  useOptionFormListHook: typeof useOptionFormListHook;
};
export default chHooks;
