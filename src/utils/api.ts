import { apiUrl } from '../constants/config';
import ProductQueryConfg from '../types/ProductQueryConfig';

const toQuery = ({ from, to, search, availability }: ProductQueryConfg) =>
  new URLSearchParams({
    from: from?.toString() ?? '0',
    to: to?.toString() ?? '100',
    ...(search && { search }),
    ...(availability && { availability }),
  }).toString();

/**
 * Fetch products from the new API. The API has a 5 minute cache.
 */
export const fetchProducts = (config: ProductQueryConfg) =>
  fetch(`${apiUrl}/products/${config.category}?${toQuery(config)}`);
