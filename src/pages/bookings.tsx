import React from "react";
import { ToastContainer } from "react-toastify";

import tw from "twin.macro";

import { useMeQuery } from "../generated/graphql";
import CancelAccess from "../components/CancelAccess";
import BookingCard from "../components/BookingCard";

const Wrapper = tw.div`flex flex-wrap mb-2.5`;

export default function Login() {
  const { data, loading: meLoading } = useMeQuery();

  if (meLoading) {
    if (data?.me === undefined) {
      return <></>;
    }
  }

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <CancelAccess
        userName=""
        title="Il semble que vous ne soyez pas connecter"
        details="veuillez retourner sur la page d'accueil"
      />
    );
  } else {
    body = (
      <>
        {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        > */}
        <BookingCard />
        {/* </ToastContainer> */}
      </>
    );
  }
  return body;
}
