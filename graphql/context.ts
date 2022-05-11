import { categories, products } from '../db/data';
import { CategoriesTypes } from '../types/category-type';
import { Products } from '../types/product-types';

export const productsDb: Products = {
  products
};

export const categoriesDb: CategoriesTypes = {
  categories
};

export const Context = {
  productsDb,
  categoriesDb
};
