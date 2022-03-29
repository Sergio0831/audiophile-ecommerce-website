import { ProductType } from './../../types/product-types';
import { extendType, objectType, nonNull, stringArg } from 'nexus';
import { CategoryTypes } from '../../types/category-type';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.nonNull.string('category');
    t.nonNull.string('image');
    t.nonNull.list.field('products', {
      type: 'Product',
      resolve(parent, args, ctx) {
        return ctx.productsDb.products.filter(
          (product: ProductType) => product.category === parent.category
        );
      }
    });
  }
});

export const CategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('categories', {
      type: 'Category',
      resolve(parent, args, ctx) {
        return ctx.categoriesDb.categories;
      }
    });
  }
});

export const CategoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('category', {
      type: 'Category',
      args: {
        categoryName: nonNull(stringArg())
      },
      resolve(parent, { categoryName }, ctx) {
        return ctx.categoriesDb.categories.find(
          (cat: CategoryTypes) => cat.category === categoryName
        );
      }
    });
  }
});
