import React, { useMemo } from 'react';

/**
 * Runs the callback function after the a timeout, the timeout gets reset by every new function call
 */
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

/**
 * A memoized version of lazyRun
 */
const useLazyCallback = <T extends unknown[]>(
  cb: (...args: T) => void,
  deps: React.DependencyList,
  delay = 500,
) => useMemo(() => lazyRun(cb, delay), deps);

export default useLazyCallback;
