import React from "react";
import tw from "twin.macro";

const Subtitle = tw.span`block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center text-Green-light`;
const Title = tw.h2`text-5xl font-bold font-serif lg:text-center dark:text-gray-800`;
const StepGrid = tw.div`grid gap-6 my-16 lg:grid-cols-3`;
const StepContainer = tw.div`flex flex-col p-8 space-y-4 rounded-md dark:bg-white shadow-sm duration-200 hover:bg-gray-100`;
const StepNumber = tw.div`flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-Green-light text-gray-800`;
const StepDescription = tw.p`text-xl font-semibold`;

export default function Foot() {
  return (
    <section>
      <Subtitle>Les différentes étapes</Subtitle>
      <Title>Comment proposer vos annonces ?</Title>
      <StepGrid>
        <StepContainer>
          <StepNumber>1</StepNumber>
          <StepDescription>
            <b>S'inscrire</b> au formulaire est dédié aux propriétaires.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <StepNumber>2</StepNumber>
          <StepDescription>
            <b>Déposez</b> votre premiere annonce sur AtypikHouse.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <StepNumber>3</StepNumber>
          <StepDescription>
            <b>Certifié</b> par l'équipe technique d'AtypikHouse dans les
            meilleurs délais*.
          </StepDescription>
        </StepContainer>
      </StepGrid>
    </section>
  );
}
