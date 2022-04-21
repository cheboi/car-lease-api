import express from 'express';
import graphqlServer from './graphql'; // We imported this

const app = express();

// We added this
graphqlServer.applyMiddleware({
  app,
});

export default app;