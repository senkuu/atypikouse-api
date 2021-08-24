import React from "react";
import tw, { styled } from "twin.macro";
import OfferCard from "../components/OfferCard";
import InputField from "../components/InputField";
import { Formik, Form } from "formik";
import { useOffersQuery } from "../generated/graphql";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const Container = tw.div`flex sm:flex-row sm:w-1/3 px-3 mb-5`;
const Headline = tw.h1`text-3xl text-center m-5 font-serif font-medium`;
const SignUpMobile = tw.button`block h-12 px-4 border-transparent rounded-md shadow-sm text-sm font-serif text-white bg-Green-default hover:bg-Green-light`;

interface Values {
  where: string;
  arrive: number;
  depart: number;
  voyageur: string;
}

function Offers() {
  const { data, loading, error } = useOffersQuery({
    variables: {
      cityId: 75056,
      getCities: true,
      getDepartements: true,
    },
  });

  const handleFormSubmit = async (values: Values) => {
    console.log(values);
  };

  if (!data && loading) {
    return <p>Loading</p>;
  }

  return (
    <Wrapper>
      <Formik
        initialValues={{
          where: "",
          arrive: 0,
          depart: 0,
          voyageur: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form tw="w-10/12 flex flex-col md:flex-row pt-10 pb-10 m-auto md:items-center">
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
                icon="flight_takeoff"
                label="arrive"
                name="arrive"
                type="date"
                placeholder="Quand ? "
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </Container>
            <Container>
              <InputField
                icon="flight_land"
                label="depart"
                name="depart"
                type="date"
                placeholder="Quand ?"
                min={new Date().toISOString().split("T")[0]}
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
            <SignUpMobile type="submit">Voir les annonces</SignUpMobile>
          </Form>
        )}
      </Formik>
      <Headline>Si vous êtes flexible :</Headline>
      {data && data.offers.map((offer) => <p>{offer.title}</p>)}
      <OfferCard />
      <OfferCard />
    </Wrapper>
  );
}

export default Offers;
