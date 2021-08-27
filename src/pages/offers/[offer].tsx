import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { Offer, useOfferQuery } from "../../generated/graphql";
import { useRouter } from "next/router";
import Icon from "@material-ui/core/Icon";
import ModalContainer from "../../components/Modal";
import OfferInput from "../../components/OfferInput";

const Wrapper = styled.div`
  ${tw`w-screen pt-10`}
  background: #F9F7F2;
`;
const Container = styled.div`
  ${tw`w-screen h-auto p-10 md:p-14`}
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
  }
`;

const Span = tw.span`ml-2 mr-2 p-4`;
const ImageContainer = tw.div`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-rows-2 sm:gap-5 p-10 w-full h-96`;
const FirstImage = tw.div`relative col-span-3 row-span-2 md:col-span-2`;
const HR = tw.hr`h-4 w-8/12 m-auto mt-4`;
const Description = tw.p`text-xs md:text-lg text-gray-900`;
const Button = tw.button`bg-Green-default px-6 py-3 text-sm md:text-lg text-white mt-6 duration-500 hover:bg-Green-light w-full font-serif`;
const H3 = tw.h3`font-serif text-sm lg:text-3xl font-bold`;

export default function OfferPage() {
  const router = useRouter();
  const { offer } = router.query;

  const desc =
    "Toue cabanée traditionnelle de 12 m, amarrée au port de Saint-Dyé-sur-Loire (port de Chambord) 4 couchages : 1 lit 140x200, 1 lit 70 x 200, 2 lits escamotables 70x190, matelas latex respirant. 1 espace salle de bain avec douche 80x80 et lavabo. Eau chaude.";
  let filtres = [
    "Piscine",
    "Mer à moins de 10km",
    "Bien-être",
    "Piscine intérieure",
    "Forêt",
    "Montagne",
    "Lac",
  ];

  const offerId = Number(offer);

  if (offerId === NaN || offerId === undefined) {
    return <p>ntm</p>;
  }

  const { data, loading, error } = useOfferQuery({
    variables: {
      id: offerId,
    },
  });

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    console.log(error);
    return <p>error</p>;
  }

  if (data === undefined || data === null) {
    return <p>404</p>;
  }

  return (
    <>
      <Wrapper>
        <div tw="mr-5">
          <h1 tw="font-serif text-lg lg:text-4xl font-bold ml-10 pt-4">
            {data!.offer.title}
          </h1>
          <H3 tw="ml-10">
            {data!.offer?.priceTTC}€
            <span tw="text-gray-500 text-sm lg:text-lg">/ nuit</span>
          </H3>
          <H3 tw="font-serif text-sm lg:text-2xl font-bold"></H3>
          <div tw="flex items-center text-sm font-medium ml-10 my-5 sm:mt-2 sm:mb-4">
            <div tw="ml-1">
              <span tw="text-black flex items-center">
                <p tw="mr-1">
                  {data!.offer.averageRating
                    ? Math.round(data!.offer.averageRating * 100) / 100
                    : "Aucune note"}
                </p>
                <Icon style={{ color: "#688f4e", fontSize: 24 }}>star</Icon>
              </span>
            </div>
            <div tw="text-base font-normal mx-2">·</div>
            <div>
              {data!.offer.city.name} ({data!.offer.city.departement.number})
            </div>
            <div tw="text-base font-normal mx-2">·</div>
            <div tw="text-gray-500 ml-1">
              <span tw="flex items-center">
                <p tw="mr-2">Certifié</p>
                <Icon style={{ color: "#688f4e", fontSize: 24 }}>
                  verified_User
                </Icon>
              </span>
            </div>
          </div>
          <ImageContainer>
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
                src="/landing-left.png"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
            <div tw="relative hidden md:block">
              <img
                src="/landing-left.png"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
            <div tw="relative hidden md:block">
              <img
                src="/landing-left.png"
                alt=""
                tw="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
              />
            </div>
          </ImageContainer>
          <Container>
            <div tw="bg-white shadow-sm w-full h-full p-6">
              <H3 tw="font-serif text-sm lg:text-2xl font-bold">
                {data!.offer?.priceTTC}€
                <span tw="text-gray-500 text-sm lg:text-lg">/ nuit</span>
              </H3>
              <OfferInput price={data!.offer?.priceTTC} title="test" />
              <p tw="text-center text-xs mt-2 mb-4">
                Aucun montant ne vous sera débité pour le moment
              </p>
              <HR />
            </div>
            <div tw="ml-5">
              <H3 tw="font-serif text-sm lg:text-2xl font-bold">
                {data!.offer.title}
              </H3>
              <div tw="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                <div tw="ml-1">
                  <span tw="text-black">2 voyageurs</span>
                </div>
                <div tw="text-base font-normal mx-2">·</div>
                <div>1 lit double</div>
                <div tw="text-base font-normal mx-2">·</div>
                <div tw="ml-1">
                  <span tw="flex items-center">
                    <p tw="mr-2">Parking gratuit</p>
                    <Icon style={{ color: "#688f4e", fontSize: 24 }}>
                      drive_eta
                    </Icon>
                  </span>
                </div>
              </div>
              <HR />
              <Description>{data!.offer?.description} </Description>
              <ModalContainer Title="Le logement" Button="En savoir plus">
                <Description>{data!.offer?.description} </Description>
              </ModalContainer>
              <div
                tw="relative px-4 py-3 mt-4 leading-normal text-red-700 bg-red-100"
                role="alert"
              >
                <span tw="absolute inset-y-0 left-0 flex items-center ml-3">
                  <Icon style={{ color: "red", fontSize: 24 }}>cancel</Icon>
                </span>
                <p tw="ml-8">
                  Aucun partenaire certifié AtypikHouse vous redirigera vers un
                  moyen de communication externe
                </p>
              </div>
              <HR />
              <div tw="w-full h-96">
                <H3 tw="font-serif text-sm lg:text-2xl font-bold ml-6 py-4">
                  Ce que propose ce logement
                </H3>
                <div tw="grid grid-cols-2 grid-rows-2 gap-0">
                  {filtres.map((filtre, index) => (
                    <>
                      <p tw="hidden">{index}</p>
                      <label tw="">
                        <Span>{filtre}</Span>
                      </label>
                    </>
                  ))}
                </div>
                <ModalContainer
                  Title="Ce que propose ce logement"
                  Button="Afficher les équipements"
                >
                  <Description>Piscine</Description>
                </ModalContainer>
              </div>
            </div>
          </Container>
          {/* <h1 tw="font-serif text-lg lg:text-3xl font-bold ml-10 pt-4">
            Où se situe le logement
          </h1> */}
        </div>
      </Wrapper>
    </>
  );
}
