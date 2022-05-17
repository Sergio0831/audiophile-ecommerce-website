import { Category } from './Category';
import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { ProductType } from '../../types/product-types';

const Image = objectType({
  name: 'Image',
  definition(t) {
    t.string('mobile');
    t.string('tablet');
    t.string('desktop');
  }
});

const Gallery = objectType({
  name: 'Gallery',
  definition(t) {
    t.field('first', { type: Image });
    t.field('second', { type: Image });
    t.field('third', { type: Image });
  }
});

const Includes = objectType({
  name: 'Includes',
  definition(t) {
    t.int('quantity');
    t.string('item');
  }
});

const Others = objectType({
  name: 'Others',
  definition(t) {
    t.string('slug');
    t.string('name');
    t.string('category');
    t.field('image', { type: Image });
  }
});

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('slug');
    t.nonNull.string('name');
    t.nonNull.string('categoryName');
    t.nonNull.field('image', { type: Image });
    t.nonNull.field('categoryImage', { type: Image });
    t.nonNull.boolean('new');
    t.nonNull.int('price');
    t.nonNull.string('description');
    t.nonNull.string('features');
    t.nonNull.list.field('includes', { type: Includes });
    t.nonNull.field('gallery', { type: Gallery });
    t.field('category', {
      type: 'Category',
      resolve(parent, _args, ctx) {
        return ctx.prisma.category.findUnique({
          where: {
            name: parent.categoryName
          }
        });
      }
    });
  }
});

export const ProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('products', {
      type: 'Product',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.product.findMany();
      }
    });
  }
});

export const ProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('product', {
      type: Product,
      args: {
        slug: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        const product = ctx.prisma.product.findUnique({
          where: {
            slug: args.slug
          }
        });

        return product;
      }
    });
  }
});
