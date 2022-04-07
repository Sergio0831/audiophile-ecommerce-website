import { CategoryTypes } from '../../../types/category-type';
import Button from '../Button';
import Image from '../Image';
import classes from './Category.module.scss';

type CategoryProps = {
  category: CategoryTypes;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <Button link={`/${category.category}`} className={classes.category}>
      <div className={classes.category__image}>
        <Image
          desktopWebp={`/assets/shared/desktop/${category.category}.webp`}
          tabletWebp={`/assets/shared/tablet/${category.category}.webp`}
          mobileWebp={`/assets/shared/mobile/${category.category}.webp`}
          imageClasses=''
          alt={category.category}
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
