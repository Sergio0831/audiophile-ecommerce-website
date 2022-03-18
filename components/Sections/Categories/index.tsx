import { gql, useQuery } from '@apollo/client';
import { CategoryTypes } from '../../../types/category-type';
import Category from '../../ui/Category';
import classes from './Categories.module.scss';

const GET_CATEGORIES = gql`
  query Categories {
    categories {
      category
      image
    }
  }
`;

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
