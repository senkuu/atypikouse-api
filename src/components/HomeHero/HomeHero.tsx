import React from "react";

import tw, { styled } from "twin.macro";

const Container = tw.div`relative w-screen h-screen overflow-x-hidden`;
const BackgroundVideo = tw.video`object-cover w-full h-full`;
const Headline = styled.h1`
  ${tw`absolute text-6xl text-white uppercase`}
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
`;
const BoldText = tw.span`font-extrabold`;

function HomeHero() {
  return (
    <>
      <Container>
        <Headline>
          <BoldText>Redecouvrez</BoldText>
          <br /> la France
        </Headline>
        <BackgroundVideo className="videoTag" playsInline autoPlay loop muted>
          <source src="home-background.mp4" type="video/mp4" />
        </BackgroundVideo>
      </Container>
    </>
  );
}

export default HomeHero;
