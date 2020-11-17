import { selector } from 'recoil';
import productListState from './productListState';

const manufacturersState = selector({
  key: 'manufacturersState',
  get: async ({ get }) => {
    const res = get(productListState);
    const set = res.products.reduce((a, p) => a.add(p.manufacturer), new Set<string>());
    return [...set];
  },
});

export default manufacturersState;
