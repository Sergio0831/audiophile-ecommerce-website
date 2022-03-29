import Image from 'next/image';
import Link from 'next/link';
import { CategoryTypes } from '../../../types/category-type';
import Button from '../Button';
import classes from './Category.module.scss';

type CategoryProps = {
  category: CategoryTypes;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <Button link={`/${category.category}`} className={classes.category}>
      <div className={classes.category__image}>
        <Image
          src={category.image}
          alt={category.category}
          width={120}
          height={150}
        />
      </div>
      <div className={classes.category__text}>
        <h6 className='heading-6'>{category.category}</h6>
        <span className='btn-default-3'>Shop</span>
      </div>
    </Button>
  );
};

export default Category;
