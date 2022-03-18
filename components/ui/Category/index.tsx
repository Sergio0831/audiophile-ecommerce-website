import Image from 'next/image';
import { CategoryTypes } from '../../../types/category-type';
import Button from '../Button';
import classes from './Category.module.scss';

type CategoryProps = {
  category: CategoryTypes;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <div className={classes.category}>
      <Image src={category.image} alt={category.category} />
      <div className={classes.category__text}>
        <h6 className='heading-6'>{category.category}</h6>
        <Button className='btn-default-3' link=''>
          Shop
        </Button>
      </div>
    </div>
  );
};

export default Category;
