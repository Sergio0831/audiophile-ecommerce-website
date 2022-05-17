import prisma from './prisma';
import { categories, products } from '../db/data';

async function main() {
  await prisma.product.createMany({
    data: products
  });

  await prisma.category.createMany({
    data: categories
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
