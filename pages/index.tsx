import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Sections/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Audiophile e-commerce website</title>
        <meta
          name='description'
          content='Audiophile is an all in one stop to fulfill your audio needs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <h1>Audiophile e-commerce website</h1>
    </div>
  );
};

export default Home;
