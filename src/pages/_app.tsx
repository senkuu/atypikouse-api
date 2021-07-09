import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import GlobalStyles from "../components/GlobalStyles";
import "../style/style.css";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API_URI ?? "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
