import { ApolloServer, gql } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import express from 'express';

import { resolvers, typeDefs } from './schema';

const { BFF_BASEPATH = '' } = process.env;

const app = express();

app.use('*', cookieParser(), express.static('build'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
