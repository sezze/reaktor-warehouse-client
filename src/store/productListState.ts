import { selector } from 'recoil';
import { fetchProducts } from '../utils/api';
import productQueryState from './productQueryState';
import ProductResponse from '../types/ProductResponse';

const productListState = selector<ProductResponse>({
  key: 'productListState',
  get: async ({ get }) => {
    const config = get(productQueryState);
    const res = await fetchProducts({
      category: config.category,
      availability: config.availability,
      search: config.search,
      from: config.page * config.displayCount,
      to: config.page * config.displayCount + config.displayCount,
    });
    return res.json();
  },
});

export default productListState;
