import { extendType, objectType, nonNull, stringArg } from 'nexus';
import { ProductType } from '../../types/product-types';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.nonNull.string('category');
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
    t.nonNull.list.field('category', {
      type: 'Product',
      args: {
        categoryName: nonNull(stringArg())
      },
      resolve(parent, { categoryName }, ctx) {
        const products = ctx.productsDb.products.filter(
          (product: ProductType) => product.category === categoryName
        );

        return products;
      }
    });
  }
});
