import React from "react";

import tw, { styled } from "twin.macro";

const Container = tw.div`relative w-screen h-screen overflow-x-hidden`;
const BackgroundVideo = tw.video`object-cover w-full h-full`;
const Content = styled.div`
  max-width: 50%;
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  z-index: 1;
`;
const TransparentGrayBackground = tw.div`h-screen w-screen bg-gray-800 bg-opacity-50 absolute`;

const Headline = tw.h1`font-serif text-6xl text-white uppercase`

const BoldText = tw.span`font-extrabold text-green-600`;

const Subline = tw.p`mt-6 font-sans text-white text-xl`

const Button = tw.button`border-white border-2 px-6 py-3 text-xl text-white shadow-md mt-6 hover:text-green-500 hover:border-green-500 font-sans`;

function HomeHero() {
  return (
    <>
      <Container>
        <TransparentGrayBackground />
        <Content>
          <Headline>Vous ne connaissez pas <BoldText>votre region</BoldText></Headline>
          <Subline>Decouvrez tous les secrets de votre region en vivant des experiences d'exception dans des lieux insolites</Subline>
          <Button>Je decouvre ma region</Button>
        </Content>
        <BackgroundVideo className="videoTag" playsInline autoPlay loop muted>
          <source src="home-background.mp4" type="video/mp4" />
        </BackgroundVideo>
      </Container>
    </>
  );
}

export default HomeHero;
