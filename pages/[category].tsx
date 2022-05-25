import { useQuery } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { apolloClient } from '../client';
import Banner from '../components/Sections/Banner';
import Categories from '../components/Sections/Categories';
import CategoryProducts from '../components/Sections/CategoryProducts';
import CategoryHero from '../components/ui/CategoryHero';
import { GET_CATEGORIES, GET_CATEGORY } from '../graphql/queries';
import prisma from '../prisma/prisma';
import { TCategory } from '../types/category-type';
import { TCategoryProducts } from '../types/categoryProducts-types';

type CategoryProps = {
  category: TCategoryProducts;
};

const Category = ({ category }: CategoryProps) => {
  const { name } = category;
  const { data } = useQuery(GET_CATEGORY, {
    variables: { name }
  });

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
      {data && <CategoryProducts products={data.category.products} />}
      <Categories />
      <Banner />
    </>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const category = await prisma.category.findUnique({
    where: { name: params.category }
  });

  return {
    props: {
      category
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await prisma.category.findMany();

  return {
    paths: categories.map((cat: TCategory) => {
      return {
        params: { category: cat.name }
      };
    }),
    fallback: false
  };
};
