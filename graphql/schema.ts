import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), 'graphql/schema.graphql'),
    typegen: join(process.cwd(), 'graphql/nexus-typegen.ts')
  },
  contextType: {
    module: join(process.cwd(), 'graphql/context.ts'),
    export: 'Context'
  }
});
