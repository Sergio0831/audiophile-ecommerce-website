import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { ProductType } from '../../types/product-types';

const Gallery = objectType({
  name: 'Gallery',
  definition(t) {
    t.field('first', { type: Image });
    t.field('second', { type: Image });
    t.field('third', { type: Image });
  }
});

const Image = objectType({
  name: 'Image',
  definition(t) {
    t.string('mobile');
    t.string('tablet');
    t.string('desktop');
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
    t.nonNull.int('id');
    t.nonNull.string('slug');
    t.nonNull.string('name');
    t.nonNull.field('image', { type: Image });
    t.nonNull.string('category');
    t.nonNull.field('categoryImage', { type: Image });
    t.nonNull.boolean('new');
    t.nonNull.int('price');
    t.nonNull.string('description');
    t.nonNull.string('features');
    t.nonNull.list.field('includes', { type: Includes });
    t.nonNull.field('gallery', { type: Gallery });
    t.nonNull.list.field('others', { type: Others });
  }
});

export const ProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('products', {
      type: 'Product',
      resolve(parent, args, ctx) {
        return ctx.productsDb.products;
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
      resolve(parent, { slug }, ctx) {
        return ctx.productsDb.products.find(
          (product: ProductType) => product.slug === slug
        );
      }
    });
  }
});
