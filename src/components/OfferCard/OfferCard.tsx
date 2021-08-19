import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const OffersList = tw.div`flex justify-center max-w-md mx-auto p-2 md:max-w-4xl sm:max-w-sm`;
const Offer = tw.div`md:w-full md:flex`;
const ImageContainer = tw.div`rounded-lg overflow-hidden md:w-2/5 md:h-auto`;
const Container = tw.div`md:flex flex-col md:w-3/5 pl-6`;
const ContainerCol = tw.div`md:flex`;
const SplitTitle = tw.div`md:flex-1`;
const Title = tw.h2`font-light text-sm text-gray-700`;
const SubTitle = tw.p`font-normal text-lg`;
const Separator = tw.div`w-10 my-2 border-gray-400 border-t-2`;
const Critaria = tw.div`text-sm font-light text-gray-700`;
const BottomContainer = tw.div`md:flex flex-grow-DEFAULT justify-between items-end`;
const Ratings = tw.div`mr-2 text-sm flex items-center`;
const Approved = tw.div`flex items-center`;
const PriceContainer = tw.div`md:text-right md:flex flex-col md:ml-auto`;

function OfferCard() {
  return (
    <Wrapper>
      <OffersList>
        <Offer>
          <ImageContainer>
            <Image
              src="/landing-left.png"
              alt="Photo de maison atypique"
              width={600}
              height={350}
            />
          </ImageContainer>
          <Container>
            <ContainerCol>
              <SplitTitle>
                <Title>Annonce numéro 58</Title>
                <SubTitle>
                  voici un sous titre pour accompagner l'annonce
                </SubTitle>
              </SplitTitle>
            </ContainerCol>
            <Separator />
            <Critaria>
              <span> 2 voyageur(s)</span>
              <span> 1 chambre(s)</span>
              <span> 2 lit(s)</span>
              <span> 1 salle(s) d'eau</span>
            </Critaria>
            <BottomContainer>
              <Ratings>
                <Icon style={{ color: "#222" }}> star</Icon>
                <span tw="font-bold"> 4.76</span>
                <span tw="text-gray-500 ml-1 mr-2"> (496)</span>
              </Ratings>
              <Approved>
                <Icon style={{ color: "#688F4E" }}> verifiedUser</Icon>
                <span tw="ml-1">Certifié</span>
              </Approved>
              <PriceContainer>
                <div>
                  <span tw="font-bold text-xl">86€</span>
                  <span tw="text-xl">/nuit</span>
                </div>
              </PriceContainer>
            </BottomContainer>
          </Container>
        </Offer>
      </OffersList>
    </Wrapper>
  );
}

export default OfferCard;
