import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { apolloClient } from '../client';
import Banner from '../components/Sections/Banner';
import Categories from '../components/Sections/Categories';
import CategoryProducts from '../components/Sections/CategoryProducts';
import CategoryHero from '../components/ui/CategoryHero';
import { GET_CATEGORIES, GET_CATEGORY } from '../graphql/queries';
import { CategoryTypes } from '../types/category-type';
import { TCategoryProducts } from '../types/categoryProducts-types';

type CategoryProps = {
  category: TCategoryProducts;
};

const Category = ({ category }: CategoryProps) => {
  console.log(category);
  const { name, products } = category;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name='description'
          content='Audiophile is an all in one stop to fulfill your audio needs.'
        />
      </Head>
      <CategoryHero title={name} />
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
    variables: { name: category }
  });
  console.log(data);

  return {
    props: {
      category: data?.category
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
        params: { category: cat.name }
      };
    }),
    fallback: false
  };
};
