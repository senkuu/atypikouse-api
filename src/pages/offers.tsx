import React from "react";
import tw, { styled } from "twin.macro";
import OfferCard from "../components/OfferCard";
import { Offer, useOffersQuery } from "../generated/graphql";
import OfferInput from "../components/OfferInput";
import Link from "next/link";

import { withApollo } from "../utils/withApollo";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const Headline = tw.h1`text-3xl text-center m-5 font-serif font-medium`;

function Offers() {
  const { data, loading } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
    },
  });

  if (!data && loading) {
    return <p>Loading</p>;
  }

  return (
    <Wrapper>
      <div tw="flex justify-center">
        <OfferInput withFilters />
      </div>
      <Headline>Si vous êtes flexible :</Headline>
      {data &&
        data.offers.offers.map((offer) => (
          <Link href={`/offers/${offer.id}`}>
            <div tw="cursor-pointer">
              <OfferCard offer={offer as Offer} />
            </div>
          </Link>
        ))}
    </Wrapper>
  );
}

export default withApollo({ ssr: true })(Offers);
