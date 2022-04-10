import { GetStaticPaths, GetStaticProps } from 'next';
import { apolloClient } from '../../client';
import Banner from '../../components/Sections/Banner';
import Categories from '../../components/Sections/Categories';
import ProductDetails from '../../components/Sections/ProductDetails';
import { GET_PRODUCT, GET_PRODUCTS } from '../../graphql/queries';
import { ProductType } from '../../types/product-types';

type ProductDetailsPageProps = {
  product: ProductType;
};

const ProductDetailsPage = ({ product }: ProductDetailsPageProps) => {
  return (
    <>
      <ProductDetails product={product} />
      <Categories />
      <Banner />
    </>
  );
};

export default ProductDetailsPage;

export const getStaticProps: GetStaticProps = async ({
  params: { slug }
}: any) => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { slug }
  });

  return {
    props: {
      product: data?.product
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS
  });

  return {
    paths: data?.products.map((product: ProductType) => {
      return {
        params: { category: product.category, slug: product.slug }
      };
    }),
    fallback: false
  };
};
