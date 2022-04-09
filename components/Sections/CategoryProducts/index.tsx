import { CategoryProductTypes } from '../../../types/categoryProducts-types';
import CategoryProduct from '../../ui/CategoryProduct';
import classes from './CategoryProducts.module.scss';

type CategoryProductsProps = {
  products: CategoryProductTypes[];
};

const CategoryProducts = ({ products }: CategoryProductsProps) => {
  return (
    <section className={`${classes.products} section-center`}>
      {products
        .map((product) => (
          <CategoryProduct key={product.id} product={product} />
        ))
        .sort((a: any) => (a.new ? 1 : -1))}
    </section>
  );
};

export default CategoryProducts;
