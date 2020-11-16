import { atom } from 'recoil';
import ProductQueryConfg from '../types/ProductQueryConfig';

const productQueryState = atom<ProductQueryConfg>({
  key: 'productQueryState',
  default: { category: 'jackets' },
});

export default productQueryState;
