import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import { useApolloClient } from "@apollo/client";
import InputField from "../InputField";

import { Formik, Form } from "formik";
import Filters from "../Filters";

const Container = tw.div`flex sm:flex-row sm:w-1/3 px-3 mb-5`;
const SignUpMobile = tw.button`block h-12 px-4 border-transparent rounded-md shadow-sm text-sm font-serif text-white bg-Green-default active:bg-Green-light ease-linear transition-all duration-150`;

interface Props {
  withFilters?: boolean;
}

interface Values {
  where: string;
  arrive: number;
  depart: number;
  voyageur: string;
}

function OfferInput({ withFilters = false }: Props) {
  const handleFormSubmit = async (values: Values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          where: "",
          arrive: 0,
          depart: 0,
          voyageur: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form tw="w-10/12 flex flex-col md:flex-row pt-10 pb-10 md:items-center">
            <Container>
              <InputField
                icon="search"
                label="where"
                name="where"
                type="text"
                placeholder="Où allez vous ?"
                required
              />
            </Container>
            <Container>
              <InputField
                icon="flight_land"
                label="arrive"
                type="date"
                placeholder="Quand ? "
                min={new Date().toISOString().split("T")[0]}
                name="arrive"
                required
              />
            </Container>
            <Container>
              <InputField
                icon="flight_takeoff"
                label="depart"
                name="depart"
                type="date"
                placeholder="Quand ?"
                min={values.arrive || new Date().toISOString().split("T")[0]}
                required
              />
            </Container>
            <Container>
              <InputField
                icon="person_add"
                label="voyageur"
                name="voyageur"
                type="number"
                placeholder="Qui ?"
                required
              />
            </Container>
            {withFilters && <Filters />}
            <SignUpMobile type="submit">Voir les annonces</SignUpMobile>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default OfferInput;
