import { Category } from '../types/category.type';

export const categories: Category[] = [
  {
    id: 1,
    category: 'Men',
    parent_category_id: 1,
  },
  {
    id: 2,
    category: 'Women',
    parent_category_id: 2,
  },
  {
    id: 3,
    category: 'Kids',
    parent_category_id: 3,
  },
  {
    id: 4,
    category: 'Party Wear',
    parent_category_id: 1,
  },
  {
    id: 5,
    category: 'Foot Wear',
    parent_category_id: 1,
  },
  {
    id: 6,
    category: 'Accessories',
    parent_category_id: 2,
  },
];
