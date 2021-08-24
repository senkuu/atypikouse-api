import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import { Offer } from "../../generated/graphql";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const OfferContainer = tw.div`bg-white mb-10 grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16`;
const Description = tw.div`relative z-10 col-start-1 row-start-1 px-4 pt-10 pb-3 bg-gradient-to-t from-black sm:bg-none`;
const Col1 = tw.div`col-start-1 row-start-2 px-4 sm:pb-16`;
const BottomCol1 = tw.div`col-start-1 row-start-3 space-y-3 px-4`;
const Col2 = tw.div`col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3`;
const GridCol2 = tw.div`w-full grid grid-cols-3 grid-rows-2 gap-2`;
const FirstImage = tw.div`relative col-span-3 row-span-2 md:col-span-2`;

interface Props {
  offer: Offer;
}

function OfferCard(props: Props) {
  return (
    <Wrapper>
      <OfferContainer>
        <Description>
          <p tw="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            Séjour unique
          </p>
          <h2 tw="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            {props.offer.title}
          </h2>
        </Description>
        <Col1>
          <div tw="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              tw="text-Green-default"
            >
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div tw="ml-1">
              <span tw="text-black">
                {props.offer.averageRating
                  ? Math.round(props.offer.averageRating * 100) / 100
                  : "Aucune note"}
              </span>
            </div>
            <div tw="text-base font-normal mx-2">·</div>
            <div>
              {props.offer.city.name} ({props.offer.city.departement.number})
            </div>
          </div>
        </Col1>
        <BottomCol1 tw="col-start-1 row-start-3 space-y-3 px-4">
          <p tw="flex items-center text-black text-sm font-medium">
            <img
              src="https://source.unsplash.com/41x41/?portrait"
              alt=""
              tw="w-6 h-6 rounded-full mr-2 bg-gray-100"
            />
            Annonce postée par{" "}
            <a
              tw="ml-1 mr-1 text-Green-light"
              href={"profile/" + props.offer.id}
            >
              Le domaine de la roche jague
            </a>
            <Icon style={{ color: "#688f4e", fontSize: 24 }}>
              verified_User
            </Icon>
          </p>
          <button
            type="button"
            tw="bg-purple-100 text-Green-default text-base font-semibold px-6 py-2 rounded-lg"
          >
            Voir les disponibilités
          </button>
        </BottomCol1>
        <Col2>
          <GridCol2>
            <FirstImage>
              <img
                src="/landing-right.jpg"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
              />
            </FirstImage>
            <div tw="relative hidden md:block">
              <img
                src="/landing-left.png"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
            <div tw="relative hidden md:block">
              <img
                src="/owner-page.jpg"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
          </GridCol2>
        </Col2>
      </OfferContainer>
    </Wrapper>
  );
}

export default OfferCard;
