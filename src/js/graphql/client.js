import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import { port } from "../../../portForFront";
let client;
if (process.browser) {
  const link = new createHttpLink({ uri: `${port}/graphql` });
  const cache = new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null)
  });
  client = new ApolloClient({
    link,
    cache,
    fetchOptions: {
      credentials: "include"
    }
  });
}

export default client;
