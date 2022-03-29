import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';
import { apolloClient } from '../client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
