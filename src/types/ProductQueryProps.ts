import Availability from './Availability';
import Category from './Category';

export default interface ProductQueryProps {
  category: Category;
  from?: number;
  to?: number;
  search?: string;
  availability?: Availability;
}
