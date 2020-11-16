/**
 * Add a CSS transition listener, useful for React Transition Group
 */
export const addTransitionEndListerner = (
  node: HTMLElement,
  done: (event: TransitionEvent) => void,
) => {
  node.addEventListener('transitionend', done, false);
};
