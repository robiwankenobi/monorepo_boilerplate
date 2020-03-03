import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import cookieParser from 'cookie-parser';
import express from 'express';

import { resolvers, typeDefs } from './schema';

const { BFF_BASEPATH = '' } = process.env;

const app = express();

app.use('*', cookieParser());

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  playground: true,
});

server.applyMiddleware({
  app,
  path: BFF_BASEPATH,
  cors: {
    origin: false,
    credentials: true,
  },
});

export { app };
