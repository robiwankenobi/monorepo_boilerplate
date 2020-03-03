import { Handler } from 'aws-lambda';

import createHandler from './server/';

export const handler: Handler = (event, context, callback) => {
  createHandler().then(handler => handler(event, context, callback));
};
