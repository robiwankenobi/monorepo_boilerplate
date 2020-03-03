import { Handler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';

import { app } from './server';

export const handler: Handler = (event, context) => {
  const server = awsServerlessExpress.createServer(app);
  awsServerlessExpress.proxy(server, event, context);
};
