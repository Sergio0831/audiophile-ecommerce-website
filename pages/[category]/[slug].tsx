import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { apolloClient } from '../../client';
import Banner from '../../components/Sections/Banner';
import Categories from '../../components/Sections/Categories';
import ProductDetails from '../../components/Sections/ProductDetails';
import ProductDetailsFeatures from '../../components/Sections/ProductDetailsFeatures';
import ProductDetailsGallery from '../../components/Sections/ProductDetailsGallery';
import ProductDetailsOthers from '../../components/Sections/ProductDetailsOthers';
import prisma from '../../prisma/prisma';
import { TProduct } from '../../types/product-types';

type ProductDetailsPageProps = {
  product: TProduct;
};

const ProductDetailsPage = ({ product }: ProductDetailsPageProps) => {
  const { features, includes, gallery, others } = product;

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name='description' content={product.description} />
      </Head>
      <ProductDetails product={product} />
      <ProductDetailsFeatures features={features} includes={includes} />
      <ProductDetailsGallery gallery={gallery} />
      <ProductDetailsOthers others={others} />
      <Categories />
      <Banner />
    </>
  );
};

export default ProductDetailsPage;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug }
  });

  return {
    props: {
      product
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany();

  return {
    paths: products.map((product) => {
      return {
        params: { category: product.categoryName, slug: product.slug }
      };
    }),
    fallback: false
  };
};
