import '../styles/main.scss';
import { ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';
import { apolloClient } from '../client';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: any) {
  return (
    // <Provider store={store}>
    //   <ApolloProvider client={apolloClient}>
    //     <Layout>

    //     </Layout>
    //   </ApolloProvider>
    // </Provider>
    <Component {...pageProps} />
  );
}

export default MyApp;
