import { categories, products } from '../db/data';
import { Categories } from '../types/caegory-type';
import { Products } from '../types/product-types';

export const productsDb: Products = {
  products
};

export const categoriesDb: Categories = {
  categories
};

export const context = {
  productsDb,
  categoriesDb
};
