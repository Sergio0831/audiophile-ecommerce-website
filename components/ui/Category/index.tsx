import { useAppDispatch } from '../../../app/hooks';
import { close } from '../../../features/mobileNav/mobileNavSlice';
import { TCategory } from '../../../types/category-type';
import Button from '../Button';
import Image from '../Image';
import classes from './Category.module.scss';

type CategoryProps = {
  category: TCategory;
};

const Category = ({ category }: CategoryProps) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      link={`/${category.name}`}
      className={classes.category}
      onClick={() => dispatch(close())}
    >
      <div className={classes.category__image}>
        <Image
          desktopWebp={`/assets/shared/desktop/${category.name}.webp`}
          tabletWebp={`/assets/shared/tablet/${category.name}.webp`}
          mobileWebp={`/assets/shared/mobile/${category.name}.webp`}
          imageClasses=''
          alt={category.name}
        />
      </div>
      <div className={classes.category__text}>
        <h6 className='heading-6'>{category.name}</h6>
        <span className='btn-default-3'>Shop</span>
      </div>
    </Button>
  );
};

export default Category;
