import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import OfferCard from "../OfferCard";
import { useApolloClient } from "@apollo/client";
import InputField from "../InputField";
import { Formik, Form } from "formik";
import OfferInput from "../OffersInput";
import ModalContainer from "../Modal";

const Checkbox = tw.input`w-4 h-4 bg-black text-white border-2 border-Green-light`;
const Span = tw.span`ml-2 mr-2 p-4`;

function Filters() {
  let filtres = [
    "Piscine",
    "Mer à moins de 10km",
    "Bien-être",
    "Piscine intérieure",
    "Forêt",
    "Montagne",
    "Lac",
  ];

  return (
    <>
      <ModalContainer Title="Nos filtres" Button="Filtres">
        <div tw="grid grid-cols-2 grid-rows-2 gap-0	">
          {filtres.map((filtre, index) => (
            <>
              <p tw="hidden">{index}</p>
              <label tw="">
                <input
                  type="checkbox"
                  tw=""
                  name="accountType"
                  value="personal"
                />
                <Span>{filtre}</Span>
              </label>
            </>
          ))}
        </div>
      </ModalContainer>
    </>
  );
}

export default Filters;
