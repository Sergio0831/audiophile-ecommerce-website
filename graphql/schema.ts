import * as types from './types';
import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'graphql', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'graphql', 'schema.graphql')
  },
  contextType: {
    module: join(process.cwd(), 'graphql', 'context.ts'),
    export: 'Context'
  }
});
