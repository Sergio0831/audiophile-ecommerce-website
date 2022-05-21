import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.PORT || 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});
