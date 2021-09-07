import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Formik, Form } from "formik";
import tw, { styled } from "twin.macro";

import InputField from "../components/InputField";
import { useLoginMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";
import CancelAccess from "../components/CancelAccess";

const Wrapper = tw.div`flex flex-wrap mb-2.5`;
const ColLeft = styled.div`
  ${tw`flex lg:w-5/12 w-0 bg-gray-900 h-screen bg-cover `}
  background-image: url('https://cdn.discordapp.com/attachments/779349667212165184/851801715812204614/karsten-winegeart-sStahKEhT9w-unsplash.jpg')
`;
const ColRight = styled.div`
  ${tw`flex lg:w-7/12 w-full h-screen bg-white justify-center items-center`}
`;
const RightForm = tw.div`w-full md:w-1/2 py-10 px-5 md:px-10`;
const RightFormCenter = tw.div`text-center mb-10`;
const HeadLine = tw.h1`font-bold text-3xl text-gray-800`;
const Paragraphe = tw.p`font-medium`;
const Position = tw.div`flex -mx-3`;
const Container_Email = tw.div`w-full px-3 mb-5`;
const Container_Password = tw.div`w-full px-3 mb-12`;
const Container_Button = tw.div`w-full px-3 mb-5`;
const SubmitButton = tw.button`block w-full max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;

interface Values {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [login] = useLoginMutation();
  const apolloClient = useApolloClient();
  const { data, loading: meLoading } = useMeQuery();
  let body = null;
  const handleFormSubmit = async (values: Values) => {
    const response = await login({ variables: values });

    apolloClient.resetStore();
    await router.push("/");
  };

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <Wrapper>
        <ColLeft />
        <ColRight>
          <RightForm>
            <RightFormCenter>
              <Image
                src="/Logo-mountain.png"
                alt="Picture of the author"
                width={220}
                height={140}
              />
              <HeadLine>Se connecter</HeadLine>
              <Paragraphe>
                Entrez vos informations pour vous connecter
              </Paragraphe>
            </RightFormCenter>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Position>
                    <Container_Email>
                      <InputField
                        icon="alternate_email"
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jean@dupont.com"
                      />
                    </Container_Email>
                  </Position>
                  <Position>
                    <Container_Password>
                      <InputField
                        icon="https"
                        label="Mot de passe"
                        name="password"
                        type="password"
                        placeholder="********"
                      />
                    </Container_Password>
                  </Position>
                  <Position>
                    <Container_Button>
                      <SubmitButton type="submit">Se connecter</SubmitButton>
                    </Container_Button>
                  </Position>
                  <div tw="w-full text-center font-medium	text-xs text-gray-700 ">
                    <a href="/register">
                      Pas encore de compte chez AtypikHouse ?
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </RightForm>
        </ColRight>
      </Wrapper>
    );
  } else {
    body = (
      <>
        <CancelAccess
          userName={data.me.name}
          title="Il semble que vous soyez déjà connecté"
          details="Veuillez retourner sur la page d'accueil"
        />
      </>
    );
  }
  return body;
}
