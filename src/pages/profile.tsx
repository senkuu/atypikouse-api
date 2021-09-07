import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import OfferCard from "../components/OfferCard";

let RamdomImage = "https://picsum.photos/200/300";
//  Banner
const HeadLine = tw.h1`font-serif font-bold text-2xl text-left text-gray-800 m-2 p-3 md:m-8 p-8 md:text-3xl`;
const Banner = styled.div`
  ${tw`bg-cover h-80	w-full md:h-96 lg:h-screen`}
  background-image: url("https://cdn.discordapp.com/attachments/779349667212165184/851799108008017940/lucas-clara-hvPB-UCAmmU-unsplash.jpg")
`;
const BannerDescription = tw.div`absolute w-3/6 top-56 right-0 mr-5 bg-Green-default h-auto p-4 text-white text-sm uppercase block font-serif tracking-wider sm:text-xl lg:flex flex-col lg:top-96 lg:h-56 lg:text-center lg:justify-center `;
const BannerContainer = tw.div`relative w-full h-auto `;
const BannerButton = tw.button`border-none bg-Green-light mt-3 p-2 lg:flex ml-auto mr-auto`;
//About Profile
const AboutContainer = tw.div`flex flex-col w-full h-auto mt-36 bg-gray-700 sm:mt-40 bg-opacity-0 md:mt-16 lg:flex-row lg:mt-0 lg:min-h-full`;
const AboutDomaine = tw.div`flex w-full h-auto bg-white p-3 flex-col lg:w-2/5`;
const AboutOwner = tw.div`flex w-full h-auto bg-Green-default p-3 mt-2  flex-col lg:w-3/5 lg:mt-0 lg:h-full`;
const TitleOwner = tw.h2`font-serif text-2xl uppercase mb-2 text-center text-white`;
const TitleDomaine = tw.h2`font-serif text-2xl uppercase text-center mb-2 lg:text-center`;
const DomaineIcon = styled.img`
  ${tw`w-24 h-24 bg-cover m-auto p-8 mt-2 mb-2 rounded-full lg:mt-5`}
  background-image: url("https://cdn.discordapp.com/attachments/779349667212165184/851801715812204614/karsten-winegeart-sStahKEhT9w-unsplash.jpg");
`;
const ContainerIcon = tw.div`flex justify-center w-full h-48 p-5 space-x-14 sm:space-x-48 lg:space-x-36      `;
const IconOwner = tw.div`w-auto h-auto text-xl text-center text-white`;
const Uppercase = tw.span`text-Green-default text-2xl`;
const PDomaine = tw.p`text-sm p-3 lg:p-5`;
const POwner = tw.p`text-sm p-3 lg:p-5 text-white`;
const PIcon = tw.p`text-sm  uppercase text-center font-semibold	text-white`;

//Locations
const LocationContainer = tw.div`w-full h-auto flex-wrap flex pt-16 pb-16`;
const LocationHeadLine = tw.div`text-4xl text-gray-900 font-serif w-full text-left mb-10 text-center`;
// const LocationBox = tw.div`flex w-72 h-72 bg-white ml-auto mr-auto mb-5 flex-col cursor-pointer duration-500 shadow-md hover:shadow-xl`;
// const LocationImg = styled.div`
//   ${tw`w-full h-36 bg-blue-400 `}
//   background-image: url("${RamdomImage}");
//   background-size: 100% auto;
// `;
// const PriceContainer = tw.div`w-full h-auto bg-Green-default flex-row pr-2`;
// const LocationTitle = tw.div`text-xl text-gray-900 text-left pt-1 pl-3 font-serif`;
// const LocationPrice = tw.h2` text-xl font-bold text-white  text-right`;
// const PriceSpan = tw.h4`text-sm bottom-0`;
// const LocationAdress = tw.p`text-sm font-light pl-3`;
// const LocationDomaine = tw.a`text-base pb-1 pl-3 duration-500 hover:text-Green-light `;
// const Review = tw.div`w-full h-auto flex items-center p-1 pl-3`;
//Maps

const MapsContainer = tw.div`w-full h-auto flex flex-col mb-3`;
const MapsHeadLine = tw.h2`text-2xl font-serif p-3 text-center lg:flex-col`;
const MapsDescription = tw.p`text-lg font-light text-center lg:flex-col`;
const MobileMaps = tw.div`block md:hidden m-auto`;
const MediumMaps = tw.div`hidden md:block lg:hidden m-auto p-5`;
const LargeMaps = tw.div`hidden md:hidden lg:block m-auto p-5`;

export default function Profile() {
  let DomaineTemplate = "Domaine de la roche Jague";

  return (
    <>
      <HeadLine>Bienvenue au domaine : {DomaineTemplate}</HeadLine>
      <BannerContainer>
        <Banner />
        <BannerDescription>
          <p>
            " Voici une légère description du domaine ainsi que toutes les
            locations "
          </p>
          <BannerButton>Voir les disponibilités</BannerButton>
        </BannerDescription>
      </BannerContainer>
      <AboutContainer>
        <AboutOwner>
          <TitleOwner>à propos :</TitleOwner>
          <POwner>
            <Uppercase>S</Uppercase>ur la route de la Bretagne et aux portes de
            la Normandie, 6 cabanes perchées dans les arbres vous attendent sur
            ce splendide berceau de verdure de 60 ha pour vous faire vivre une
            nuit insolite sous le ciel étoilé. Quoi de mieux que de passer un
            weekend dans les arbres en famille ou en amoureux pour vivre des
            moments de complicité! Vivez au rythme de la nature et choisissez
            entre une cabane dans les arbres de 6 à 15 mètres de hauteur ou
            optez pour une cabane sur l'eau pour une nuit inoubliable au fil de
            l'eau. Depuis 2018, le lov'nid vous offre un séjour de bien-être
            avec son spa privé.
          </POwner>
          <ContainerIcon>
            <IconOwner>
              <Icon style={{ fontSize: 42 }}>event</Icon>
              <PIcon>Arrivée pour 16h</PIcon>
            </IconOwner>
            <IconOwner>
              <Icon style={{ fontSize: 42 }}>schedule</Icon>
              <PIcon>Départ avant 10h</PIcon>
            </IconOwner>
            <IconOwner>
              <Icon style={{ fontSize: 42 }}>explore</Icon>
              <PIcon>Finistère, Bretagne</PIcon>
            </IconOwner>
          </ContainerIcon>
        </AboutOwner>
        <AboutDomaine>
          <TitleDomaine>Le domaine :</TitleDomaine>
          <DomaineIcon />
          <PDomaine>
            <Uppercase>S</Uppercase>ur la route de la Bretagne et aux portes de
            la Normandie, 6 cabanes perchées dans les arbres vous attendent sur
            ce splendide berceau de verdure de 60 ha pour vous faire vivre une
            nuit insolite sous le ciel étoilé. Quoi de mieux que de passer un
            weekend dans les arbres en famille ou en amoureux pour vivre des
            moments de complicité! Vivez au rythme de la nature et choisissez
            entre une cabane dans les arbres de 6 à 15 mètres de hauteur ou
            optez pour une cabane sur l'eau pour une nuit inoubliable au fil de
            l'eau. Depuis 2018, le lov'nid vous offre un séjour de bien-être
            avec son spa privé.
          </PDomaine>
        </AboutDomaine>
      </AboutContainer>
      <LocationContainer>
        <LocationHeadLine>Toutes nos Locations</LocationHeadLine>
        {/* <LocationBox>
          <LocationImg />
          <PriceContainer>
            <LocationPrice>
              <PriceSpan>à partir de : </PriceSpan>189€ {LocationDateSettings}
            </LocationPrice>
          </PriceContainer>
          <LocationTitle>Bulle en plein forêt</LocationTitle>
          <LocationDomaine>Domaine de la roche Jague</LocationDomaine>
          <LocationAdress>{Adress}</LocationAdress>
          <Review>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "gray" }}>starHalf</Icon>
          </Review>
        </LocationBox>
        <LocationBox>
          <LocationImg />
          <PriceContainer>
            <LocationPrice>
              <PriceSpan>à partir de : </PriceSpan>132€ {LocationDateSettings}
            </LocationPrice>
          </PriceContainer>

          <LocationTitle>Cabane dans la forêt</LocationTitle>
          <LocationDomaine>Domaine de la roche Jague</LocationDomaine>
          <LocationAdress>{Adress}</LocationAdress>
          <Review>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "gray" }}>starHalf</Icon>
          </Review>
        </LocationBox>
        <LocationBox>
          <LocationImg />
          <PriceContainer>
            <LocationPrice>
              <PriceSpan>à partir de : </PriceSpan>109€ {LocationDateSettings}
            </LocationPrice>
          </PriceContainer>

          <LocationTitle>Gîtes au bord d'un lac</LocationTitle>
          <LocationDomaine>Domaine de la roche Jague</LocationDomaine>
          <LocationAdress>{Adress}</LocationAdress>
          <Review>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "gray" }}>starHalf</Icon>
          </Review>
        </LocationBox>
        <LocationBox>
          <LocationImg />
          <PriceContainer>
            <LocationPrice>
              <PriceSpan>à partir de : </PriceSpan>189€ {LocationDateSettings}
            </LocationPrice>
          </PriceContainer>
          <LocationTitle>Bulle en plein forêt</LocationTitle>
          <LocationDomaine>Domaine de la roche Jague</LocationDomaine>
          <LocationAdress>{Adress}</LocationAdress>
          <Review>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "#2B463C" }}>star</Icon>
            <Icon style={{ color: "gray" }}>starHalf</Icon>
          </Review>
        </LocationBox> */}
      </LocationContainer>
      <MapsContainer>
        <MapsHeadLine>Domaine de la roche jague</MapsHeadLine>
        <MapsDescription>
          <Icon style={{ fontSize: 22, color: "#688F4E" }}>room </Icon> 22260
          Ploëzal, domaine de la roche jagu
        </MapsDescription>
        <MapsDescription>
          Proche de Lannion, à 25 minutes de Guingamps
        </MapsDescription>
        <MobileMaps>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2631.540466411343!2d-3.1509163!3d48.7333718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48121f6eaa3dfd55%3A0x3c42f63d3e1da9b3!2sCh%C3%A2teau%20de%20la%20Roche-Jagu!5e0!3m2!1sen!2sfr!4v1623416852147!5m2!1sen!2sfr"
            width="300"
            height="300"
            loading="lazy"
          ></iframe>
        </MobileMaps>
        <MediumMaps>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2631.540466411343!2d-3.1509163!3d48.7333718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48121f6eaa3dfd55%3A0x3c42f63d3e1da9b3!2sCh%C3%A2teau%20de%20la%20Roche-Jagu!5e0!3m2!1sen!2sfr!4v1623416852147!5m2!1sen!2sfr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </MediumMaps>
        <LargeMaps>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2631.540466411343!2d-3.1509163!3d48.7333718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48121f6eaa3dfd55%3A0x3c42f63d3e1da9b3!2sCh%C3%A2teau%20de%20la%20Roche-Jagu!5e0!3m2!1sen!2sfr!4v1623416852147!5m2!1sen!2sfr"
            width="800"
            height="600"
            loading="lazy"
          ></iframe>
        </LargeMaps>
      </MapsContainer>
    </>
  );
}
