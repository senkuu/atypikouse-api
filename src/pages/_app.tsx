import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import GlobalStyles from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import "../style/style.css";
import Footer from "../components/Footer";

import apolloClient from "../apolloClient";

const PUBLIC_KEY = "pk_test_51IVG3DE4ja3AjZbrXOSl7LOfQY20AcGapLmIHKiRn1w5YnMDWwB4SHa6RMfRtUCZAKqbuLqg64RXt5xFeTnSDcEJ00is5ZnbFe";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const showRegister = router.pathname === "/register" ? false : true;
  const showLogin = router.pathname === "/login" ? false : true;

  return (
    <ApolloProvider client={apolloClient}>
      <Elements stripe={stripeTestPromise}>
        <GlobalStyles />
        {showRegister && showLogin && <Navbar />}
        <Component {...pageProps} />
        {showRegister && showLogin && <Footer />}
      </Elements>
    </ApolloProvider>
  );
}

export default MyApp;
