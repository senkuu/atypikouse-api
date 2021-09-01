import React from "react";
import {ApolloProvider, ApolloClient, InMemoryCache, ApolloLink} from "@apollo/client";
import { useRouter } from "next/router";
import GlobalStyles from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import "../style/style.css";
import Footer from "../components/Footer";
import { createUploadLink } from "apollo-upload-client";

// Temporary workaround : @ts-ignore on link (dependency version problems)
const client = new ApolloClient({
  //@ts-ignore
  link: createUploadLink({
    uri: process.env.GRAPHQL_API_URI ?? "http://localhost:4000/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const showRegister = router.pathname === "/register" ? false : true;
  const showLogin = router.pathname === "/login" ? false : true;

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      {showRegister && showLogin && <Navbar />}
      <Component {...pageProps} />
      {showRegister && showLogin && <Footer />}
    </ApolloProvider>
  );
}

export default MyApp;
