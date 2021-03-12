import Head from "next/head";
import Image from "next/image";

import tw, { styled } from "twin.macro";

import HomeHero from "../components/HomeHero";

const MainContainer = styled.main`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

const Container = tw.div`container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24`;

const Title = tw.h2`font-serif text-5xl md:text-6xl uppercase`;

const GreenText = tw.span`text-green-500`;

const ImagesContainer = tw.div`flex flex-col mt-6 mb-4 lg:mb-0 lg:flex-row lg:justify-around sm:mt-12`;

const ImageSquareContainer = tw.div`relative`;

const Square = tw.div`absolute bg-green-500 h-36 w-36`;

const BottomLeftSquare = styled(Square)`
  left: -10px;
  bottom: -5px;
`;

const TopRightSquare = styled(Square)`
  right: -10px;
  top: -10px;
`;

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
          <ImagesContainer>
            <ImageSquareContainer>
              <BottomLeftSquare />
              <Image
                src="/landing-left.png"
                alt="Photo de maison atypique"
                width={557}
                height={371}
              />
            </ImageSquareContainer>
            <ImageSquareContainer>
              <TopRightSquare />
              <Image
                src="/landing-right.jpg"
                alt="Photo de maison atypique"
                width={557}
                height={371}
              />
            </ImageSquareContainer>
          </ImagesContainer>
        </Container>
      </MainContainer>
    </>
  );
}
