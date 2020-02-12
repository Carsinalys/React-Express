import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import { port } from "../../../portForFront";
let client;
if (process.browser) {
  const link = new createHttpLink({ uri: `${port}/graphql` });
  const cache = new InMemoryCache();
  client = new ApolloClient({ link, cache });
}

export default client;
