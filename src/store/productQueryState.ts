import { atom } from 'recoil';
import ProductQueryConfg from '../types/ProductQueryConfig';

const productQueryState = atom<ProductQueryConfg>({
  key: 'productQueryState',
  default: {
    category: 'jackets',
    page: 0,
    displayCount: 50,
  },
});

export default productQueryState;
