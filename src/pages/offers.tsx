import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import OfferCard from "../components/OfferCard";
import { useApolloClient } from "@apollo/client";
import InputField from "../components/InputField";
import { Formik, Form } from "formik";
import OfferInput from "../components/OfferInput";
import ModalContainer from "../components/Modal";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const Container = tw.div`flex sm:flex-row sm:w-1/3 px-3 mb-5`;
const Headline = tw.h1`text-3xl text-center m-5 font-serif font-medium`;
const SignUpMobile = tw.button`block h-12 px-4 border-transparent rounded-md shadow-sm text-sm font-serif text-white bg-Green-default hover:bg-Green-light`;

function Offers() {
  return (
    <Wrapper>
      <div tw="flex justify-center">
        <OfferInput withFilters />
      </div>
      <Headline>Si vous êtes flexible :</Headline>
      <OfferCard />
      <OfferCard />
    </Wrapper>
  );
}

export default Offers;
