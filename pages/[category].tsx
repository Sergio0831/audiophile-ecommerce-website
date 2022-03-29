import { GetStaticPaths, GetStaticProps } from 'next';
import { apolloClient } from '../client';
import CategoryHero from '../components/ui/CategoryHero';
import { GET_CATEGORIES, GET_CATEGORY } from '../graphql/queries';
import { CategoryTypes } from '../types/category-type';

type CategoryProps = {
  category: string;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <>
      <CategoryHero title={category} />
    </>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({
  params: { category }
}: any) => {
  const { data } = await apolloClient.query({
    query: GET_CATEGORY,
    variables: { categoryName: category }
  });

  return {
    props: {
      category: data?.category.category
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES
  });

  return {
    paths: data?.categories.map((cat: CategoryTypes) => {
      return {
        params: { category: cat.category }
      };
    }),
    fallback: false
  };
};
