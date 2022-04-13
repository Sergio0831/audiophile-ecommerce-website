import { useQuery } from '@apollo/client';
import clsx from 'clsx';
import { GET_CATEGORIES } from '../../../graphql/queries';
import { CategoryTypes } from '../../../types/category-type';
import Category from '../../ui/Category';
import classes from './Categories.module.scss';

type CategoriesProps = {
  className?: string;
};

const Categories = ({ className }: CategoriesProps) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const categoriesClasses = clsx(
    {
      [classes.categories]: true,
      'section-center': true
    },
    className
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={categoriesClasses}>
      {data.categories.map((cat: CategoryTypes) => (
        <Category key={cat.category} category={cat} />
      ))}
    </section>
  );
};

export default Categories;
