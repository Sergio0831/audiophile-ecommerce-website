import { GetStaticPaths, GetStaticProps } from 'next';
import { apolloClient } from '../client';
import Banner from '../components/Sections/Banner';
import Categories from '../components/Sections/Categories';
import CategoryProducts from '../components/Sections/CategoryProducts';
import CategoryHero from '../components/ui/CategoryHero';
import { GET_CATEGORIES, GET_CATEGORY } from '../graphql/queries';
import { CategoryTypes } from '../types/category-type';
import { CategoryProductTypes } from '../types/categoryProducts-types';

type CategoryProps = {
  category: string;
  products: CategoryProductTypes[];
};

const Category = ({ category, products }: CategoryProps) => {
  return (
    <>
      <CategoryHero title={category} />
      <CategoryProducts products={products} />
      <Categories />
      <Banner />
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
  console.log(data.category.products);

  return {
    props: {
      category: data?.category.category,
      products: data?.category.products
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
