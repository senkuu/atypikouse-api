import React from "react";
import tw, { styled } from "twin.macro";
import { useMeQuery } from "../generated/graphql";
import InformationsForm from "../components/InformationsForm";

const Wrapper = styled.div`
  ${tw`w-screen p-6 space-y-8`}
  background: #F9F7F2;
`;

export default function Account() {
  //   const handleFormSubmit = async (values: Values) => {
  //   };

  const { data, loading: meLoading } = useMeQuery();
  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <>
        <p>pas connecter</p>
      </>
    );
  } else {
    body = (
      <>
        <InformationsForm />
      </>
    );
  }

  return body;
}
