import { useMemo } from 'react';
import useLatest from './useLatest';
import { debounce } from 'throttle-debounce';

interface DebounceOptions {
  atBegin?: boolean;
}

export default function useDebounceFn<T extends (...args: any) => any>(
  fn: T,
  wait?: number,
  options?: DebounceOptions
) {
  const fnRef = useLatest(fn);

  const debounced = useMemo(
    () =>
      debounce(
        wait ?? 500,
        (...args: [...Parameters<T>]): ReturnType<T> => {
          return fnRef.current(...args);
        },
        options
      ),
    [fnRef, options, wait]
  );

  return debounced;
}
