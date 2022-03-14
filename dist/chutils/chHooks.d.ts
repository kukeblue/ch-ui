/// <reference types="react" />
interface usePageProps {
  isScroll?: boolean;
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
  setQuery: import('react').Dispatch<import('react').SetStateAction<Object>>;
  loadMore: () => Promise<void>;
  total: number;
};
interface useOptionFormListHookProps {
  url: string;
  query?: Object;
  expiresTime?: number;
  cache?: boolean;
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
declare function useInterval(callback: () => void, delay: number | null): void;
declare const chHooks: {
  usePage: typeof usePage;
  useOptionFormListHook: typeof useOptionFormListHook;
  useInterval: typeof useInterval;
};
export default chHooks;
