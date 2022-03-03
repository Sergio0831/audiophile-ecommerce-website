import type { NextPage } from 'next';
import Head from 'next/head';

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
      <h1>Audiophile e-commerce website</h1>
    </div>
  );
};

export default Home;
