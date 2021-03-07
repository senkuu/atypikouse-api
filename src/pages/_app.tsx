import React from "react";
import GlobalStyles from "../components/GlobalStyles";

import "../style/style.css";

function MyApp({ Component, pageProps }: {Component: any, pageProps: any}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
