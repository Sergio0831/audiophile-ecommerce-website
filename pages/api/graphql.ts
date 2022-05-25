import { context } from './../../graphql/context';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { schema } from '../../graphql/schema';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PageConfig } from 'next';

const cors = Cors();
const apolloServer = new ApolloServer({
  context,
  schema,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};
