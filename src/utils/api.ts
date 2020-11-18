import { apiUrl } from '../constants/config';
import ProductQueryProps from '../types/ProductQueryProps';

const toQuery = ({ from, to, search, availability }: ProductQueryProps) =>
  new URLSearchParams({
    from: from?.toString() ?? '0',
    to: to?.toString() ?? '100',
    ...(search && { search }),
    ...(availability && { availability }),
  }).toString();

/**
 * Fetch products from the new API. The API has a 5 minute cache.
 */
export const fetchProducts = (config: ProductQueryProps) =>
  fetch(`${apiUrl}/products/${config.category}?${toQuery(config)}`);
