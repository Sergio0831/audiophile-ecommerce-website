import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Sections/Banner';
import Categories from '../components/Sections/Categories';
import Hero from '../components/Sections/Hero';
import HomeProducts from '../components/Sections/HomeProducts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
        <meta
          name='description'
          content='Audiophile is an all in one stop to fulfill your audio needs.'
        />
      </Head>
      <Hero />
      <Categories />
      <HomeProducts />
      <Banner />
    </>
  );
};

export default Home;
