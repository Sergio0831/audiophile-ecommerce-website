import Head from 'next/head';
import Checkout from '../../features/checkout/CheckoutSection';

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta
          name='description'
          content='Audiophile is an all in one stop to fulfill your audio needs.'
        />
      </Head>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
