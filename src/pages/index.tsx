import Head from "next/head";

import tw, { styled } from "twin.macro";

import HomeHero from "../components/HomeHero";

const MainContainer = styled.main`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

const Container = tw.div`container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between`;

const Title = tw.h2`font-serif text-5xl md:text-6xl uppercase`;

const GreenText = tw.span`text-green-500`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Atypik'House | Séléction de logements insolites premiums</title>
      </Head>
      <HomeHero />
      <MainContainer>
        <Container>
          <Title>
            des lieux <GreenText>d’exceptions</GreenText>
          </Title>
        </Container>
      </MainContainer>
    </>
  );
}
