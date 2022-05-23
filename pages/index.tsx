import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
        <meta
          name='description'
          content='Audiophile is an all in one stop to fulfill your audio needs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

export default Home;
