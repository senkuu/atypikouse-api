import React from "react";
import { ToastContainer } from 'react-toastify'

import tw from "twin.macro";

import { useMeQuery } from "../generated/graphql";
import CancelAccess from "../components/CancelAccess";
import BookingCard from "../components/BookingCard";

const Wrapper = tw.div`flex flex-wrap mb-2.5`;

export default function Login() {
  const { data, loading: meLoading } = useMeQuery();

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <Wrapper>
        <CancelAccess
          userName=""
          title="Il semble que vous soyez déjà connecter"
          details="veuillez retourner sur la page d'accueil"
        />
      </Wrapper>
    );
  } else {
    body = (
      <>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          <BookingCard />
        </ToastContainer>
      </>
    );
  }
  return body;
}
