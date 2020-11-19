import { selector } from 'recoil';
import productListState from './productListState';
import productQueryState from './productQueryState';

const pageCountState = selector<number>({
  key: 'pageCountState',
  get: ({ get }) => {
    const products = get(productListState);
    const config = get(productQueryState);
    return Math.ceil(products.totalCount / config.displayCount);
  },
});

export default pageCountState;
