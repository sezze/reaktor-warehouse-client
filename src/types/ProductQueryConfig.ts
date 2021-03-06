import Availability from './Availability';
import Category from './Category';

export default interface ProductQueryConfg {
  category: Category;
  page: number;
  displayCount: number;
  search?: string;
  availability?: Availability;
}
