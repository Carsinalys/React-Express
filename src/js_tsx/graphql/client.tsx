import { ApolloClient } from "apollo-client";
import { InMemoryCache, IdGetterObj, NormalizedCacheObject } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { port } from "../../../portForFront";
let client: ApolloClient<NormalizedCacheObject>|undefined;
const isBrowser = typeof window !== "undefined";

interface IdGetterObjAdd extends IdGetterObj {
  _id?: string
}

if (isBrowser) {
  const link = createHttpLink({ uri: `${port}/graphql` });
  const cache = new InMemoryCache({
    addTypename: false,
    dataIdFromObject: (o: IdGetterObjAdd) => (o._id ? `${o.__typename}:${o._id}` : null)
  });
  client = new ApolloClient({
    link,
    cache
  });
} else client = undefined

export default client;
