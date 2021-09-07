import React from "react";
import tw, { styled } from "twin.macro";
import OfferCard from "../components/OfferCard";
import { Offer, useOffersQuery } from "../generated/graphql";
import OffersInput from "../components/OffersInput";
import Link from "next/link";

import { withApollo } from "../utils/withApollo";

import { useState, ChangeEvent } from "react";
import { useApolloClient } from "@apollo/client";
import Filters from "../components/Filters";
import { Icon } from "@material-ui/core";

interface Values {
  where: string;
  arrive: string;
  depart: string;
  voyageur: string;
}
const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const Container = tw.div`flex sm:flex-row sm:w-1/3 px-3 mb-5`;
const Headline = tw.h1`text-3xl text-center m-5 font-serif font-medium`;
const SignUpMobile = tw.button`block ml-10 h-12 px-4 border-transparent rounded-md shadow-sm text-sm font-serif text-white bg-Green-default hover:bg-Green-light`;
function Offers() {
  const [state, setState] = useState({ value: "75056" });
  const [alert, setAlert] = useState(false);
  const apolloClient = useApolloClient();

  const { data, loading } = useOffersQuery({
    variables: {
      cityId: parseFloat(state.value),
      getCities: true,
      getDepartements: true,
    },
  });

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setState({ value: event?.currentTarget?.value });
  };

  if (!data && loading) {
    return <p>Loading</p>;
  }

  return (
    <Wrapper>
      <div tw="flex flex-row justify-center p-5 items-center">
        <select
          style={{
            width: "20%",
            display: "flex",
            paddingLeft: "0.5rem",
            paddingRight: "0.75rem",
            borderRadius: "0.5rem",
            borderWidth: "2px",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            borderColor: "#bdc3c7",
            borderStyle: "solid",
            height: "40px",
            fontFamily: "Lato",
          }}
          name="offerId"
          onChange={handleChange}
          required
        >
          <option value="75056">Paris</option>
          <option value="13055">Marseille</option>
          <option value="69123">Lyon</option>
          <option value="31555">Toulouse</option>
          <option value="6088">Nice</option>
          <option value="44109">Nantes</option>
          <option value="34172">Montpellier</option>
          <option value="67482">Strasbourg</option>
          <option value="33063">Bordeaux</option>
        </select>
        <input
          placeholder="Quand ? "
          type="date"
          min={new Date().toISOString().split("T")[0]}
          tw="ml-10 mr-10 border-2 border-gray-300 rounded-lg"
        />
        <Filters />
        <SignUpMobile
          onClick={() => {
            apolloClient.resetStore();
            setAlert(true);
          }}
        >
          Valider
        </SignUpMobile>
      </div>
      {alert ? (
        <div
          tw="relative px-4 py-3 mt-4 leading-normal text-Green-default bg-green-100 mb-5 w-auto"
          role="alert"
        >
          <span tw="absolute inset-y-0 left-0 flex items-center ml-3">
            <Icon style={{ color: "#688F4E", fontSize: 24 }}>check_circle</Icon>
          </span>
          <p tw="ml-8">Les offres ont bien été actualisées.</p>
        </div>
      ) : (
          ""
        )}
      {alert ? <></> : <Headline>Si vous êtes flexible :</Headline>}
      {data &&
        data.offers.offers.map((offer, index) => (
          <Link key={index} href={`/offers/${offer.id}`}>
            <div tw="cursor-pointer">
              <OfferCard offer={offer as Offer} />
            </div>
          </Link>
        ))}
    </Wrapper>
  );
}

export default withApollo({ ssr: true })(Offers);
