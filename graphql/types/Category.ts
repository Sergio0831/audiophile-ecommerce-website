import { extendType, objectType, nonNull, stringArg } from 'nexus';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('name');
    t.nonNull.string('image');
    t.nonNull.list.field('products', {
      type: 'Product',
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.product.findMany({
          where: {
            categoryName: parent.name
          }
        });
      }
    });
  }
});

export const CategoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('categories', {
      type: 'Category',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.category.findMany();
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
        name: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        const category = ctx.prisma.category.findUnique({
          where: { name: args.name }
        });

        return category;
      }
    });
  }
});
