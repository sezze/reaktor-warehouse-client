import { selector } from 'recoil';
import { fetchProducts } from '../utils/api';
import productQueryState from './productQueryState';
import ProductResponse from '../types/ProductResponse';

const productListState = selector<ProductResponse>({
  key: 'productListState',
  get: async ({ get }) => {
    const config = get(productQueryState);
    const res = await fetchProducts(config);
    return res.json();
  },
});

export default productListState;
