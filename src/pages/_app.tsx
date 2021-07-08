import React from "react";
import { Provider as UrqlProvider, createClient } from "urql";

import GlobalStyles from "../components/GlobalStyles";
import "../style/style.css";

const urqlClient = createClient({
  url: process.env.GRAPHQL_API_URI ?? "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <UrqlProvider value={urqlClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </UrqlProvider>
  );
}

export default MyApp;
