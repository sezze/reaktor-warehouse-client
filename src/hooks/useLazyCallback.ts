import React, { useMemo } from 'react';

export const lazyRun = <T extends unknown[]>(
  cb: (...args: T) => void,
  delay = 1000,
): ((...args: T) => void) => {
  let timeout: number | undefined;

  return (...args: T) => {
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
};

const useLazyCallback = <T extends unknown[]>(
  cb: (...args: T) => void,
  deps: React.DependencyList,
  delay = 500,
) => useMemo(() => lazyRun(cb, delay), deps);

export default useLazyCallback;
