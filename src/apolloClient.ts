import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/graphql` : "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});
