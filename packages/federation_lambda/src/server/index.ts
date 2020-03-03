import { ApolloServer } from 'apollo-server-lambda';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [{ name: 'books', url: 'http://localhost:3000/graphql' }],
});

const createHandler = async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({
    schema,
    executor,
    introspection: true,
    playground: true,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }),
  });
  // eslint-disable-next-line no-return-await
  return server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
      methods: 'GET, POST',
      allowedHeaders:
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
  });
};

export default createHandler;
