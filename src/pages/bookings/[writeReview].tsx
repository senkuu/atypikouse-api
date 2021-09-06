import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import InputField from "../../components/InputField";
import {
  useCreateReviewMutation,
  useLoginMutation,
  useMeQuery,
} from "../../generated/graphql";
import { useApolloClient } from "@apollo/client";
import CancelAccess from "../../components/CancelAccess";
import tw, { styled } from "twin.macro";
import { useState } from "react";
import { Icon } from "@material-ui/core";

interface Values {
  bookingId: number;
  text: string;
  rating: number;
}

const RightForm = tw.div`w-full md:w-1/2 py-10 px-5 md:px-10`;
const RightFormCenter = tw.div`text-center mb-10`;
const ErrorMessage = tw.p`text-red-700 text-center mb-8`;
const HeadLine = tw.h1`font-bold text-3xl text-gray-900`;
const Paragraphe = tw.p`font-medium`;
const Position = tw.div`flex flex-col -mx-3`;
const Container_Name = tw.div`w-1/2 px-3 mb-5 m-auto`;
const Container_Email = tw.div`w-full px-3 mb-5`;
const Container_Password = tw.div`w-full px-3 mb-12`;
const Container_Button = tw.div`w-full px-3 mb-5`;
const SubmitButton = tw.button`block w-full mt-10 mb-10 max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;

export default function Login() {
  const router = useRouter();
  const apolloClient = useApolloClient();
  const [alert, setAlert] = useState(false);
  const [createReview] = useCreateReviewMutation();

  const { data, loading: meLoading } = useMeQuery();
  const { writeReview } = router.query;

  const bookingId = Number(writeReview);

  const handleFormSubmit = async (values: Values) => {
    const response = await createReview({ variables: values });
    console.log(response);
    apolloClient.resetStore();
  };

  if (isNaN(bookingId) || bookingId === undefined) {
    return <p>invalid bookingId </p>;
  }

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <CancelAccess
        userName={""}
        title="Il semble que vous ne soyez pas connecter"
        details="veuillez retourner sur la page d'accueil"
      />
    );
  } else {
    body = (
      <>
        <Formik
          initialValues={{
            bookingId: bookingId,
            text: "",
            rating: 0,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Position>
                <Container_Name>
                  <InputField
                    icon="sms"
                    label="Votre avis :"
                    name="text"
                    type="text"
                    placeholder="avis..."
                    required
                  />
                </Container_Name>

                <Container_Name>
                  <InputField
                    icon="star"
                    label="Votre note :"
                    name="rating"
                    type="number"
                    placeholder="4.8/5"
                    max="5"
                    required
                  />
                </Container_Name>
              </Position>
              <div>
                {/* {isError ? (
                      <ErrorMessage>
                        *mot de passe trop court. le mot de passe doit comporter
                        minimum 8 caractères
                      </ErrorMessage>
                    ) : (
                      ""
                    )} */}
              </div>

              <SubmitButton
                onClick={() => {
                  setAlert(true);
                }}
                type="submit"
              >
                Déposer votre avis
              </SubmitButton>

              <div tw="w-full text-center font-medium	text-xs text-gray-700 "></div>
            </Form>
          )}
        </Formik>
        {alert ? (
          <div
            tw="relative px-4 py-3 mt-4 leading-normal text-Green-default bg-green-100 mb-5 w-auto"
            role="alert"
          >
            <span tw="absolute inset-y-0 left-0 flex items-center ml-3">
              <Icon style={{ color: "#688F4E", fontSize: 24 }}>
                check_circle
              </Icon>
            </span>
            <p tw="ml-8">Votre avis à bien était pris en compte.</p>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
  return body;
}
