import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import GlobalStyles from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import "../style/style.css";
import Footer from "../components/Footer";

import apolloClient from "../apolloClient";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const showRegister = router.pathname === "/register" ? false : true;
  const showLogin = router.pathname === "/login" ? false : true;

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      {showRegister && showLogin && <Navbar />}
      <Component {...pageProps} />
      {showRegister && showLogin && <Footer />}
    </ApolloProvider>
  );
}

export default MyApp;
