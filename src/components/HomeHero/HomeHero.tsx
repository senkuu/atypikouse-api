import React from "react";

import tw, { styled } from "twin.macro";
import OfferInput from "../OffersInput";

const Container = tw.div`relative w-screen h-screen overflow-x-hidden`;
const BackgroundVideo = tw.video`object-cover w-full h-full`;
const Content = styled.div`
  ${tw`container absolute flex flex-col items-center px-4 py-32 text-center top-1/3`}
  z-index: 1;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 60%;
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    text-align: left;
    display: block;
  }
`;
const TransparentGrayBackground = tw.div`h-screen w-screen bg-gray-800 bg-opacity-50 absolute`;

const Headline = tw.h1`font-serif text-5xl text-center md:text-left md:text-6xl text-white uppercase`;

const GreenText = tw.span`text-Green-light`;

const Subline = tw.p`mt-6 font-sans text-white text-lg text-center md:text-left md:text-xl`;

const Button = tw.button`border-white border-2 px-6 py-3 text-lg md:text-xl text-white shadow-md mt-6 hover:text-green-500 hover:border-green-500 font-sans`;

function HomeHero() {
  return (
    <>
      <Container>
        <TransparentGrayBackground />
        <Content>
          <Headline>
            Vous ne connaissez pas <GreenText>votre région</GreenText>
          </Headline>
          <Subline>
            Découvrez tous les secrets de votre région en vivant des expériences
            d'exception dans des lieux insolites
          </Subline>
          <div tw="hidden w-screen md:block">
            <OfferInput />
          </div>
          <div tw="md:hidden">
            <Button type="submit">Voir les annonces</Button>
          </div>
        </Content>
        <BackgroundVideo
          className="videoTag"
          poster="home-bg-preview.png"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="home-background.mp4" type="video/mp4" />
        </BackgroundVideo>
      </Container>
    </>
  );
}

export default HomeHero;
