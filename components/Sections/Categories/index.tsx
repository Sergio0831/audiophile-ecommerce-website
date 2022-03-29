import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../graphql/queries';
import { CategoryTypes } from '../../../types/category-type';
import Category from '../../ui/Category';
import classes from './Categories.module.scss';

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={`${classes.categories} section-center`}>
      {data.categories.map((cat: CategoryTypes) => (
        <Category key={cat.category} category={cat} />
      ))}
    </section>
  );
};

export default Categories;
