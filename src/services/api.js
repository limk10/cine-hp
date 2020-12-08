import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tmdb-graphql.com/",
  cache: new InMemoryCache()
});

export default client;
