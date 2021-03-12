import Head from "next/head";

import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atypik'House | Séléction de logements insolites premiums</title>
      </Head>
      <HomeHero />
      <h1>Atypik'house</h1>
    </>
  );
}
