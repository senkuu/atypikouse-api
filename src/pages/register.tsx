import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { useRegisterMutation } from "../generated/graphql";

import InputField from "../components/InputField";
import { useApolloClient } from "@apollo/client";

const Wrapper = tw.div`flex flex-wrap mb-2.5`;
const Banner = styled.div`
  ${tw`flex lg:w-5/12 w-0 bg-gray-900 h-screen bg-cover`}
  background-image: url('https://cdn.discordapp.com/attachments/779349667212165184/851799108008017940/lucas-clara-hvPB-UCAmmU-unsplash.jpg')
`;
const ContainerForm = styled.div`
  ${tw`flex lg:w-7/12 w-full h-screen bg-white justify-center items-center`}
`;
const RightForm = tw.div`w-full md:w-1/2 py-10 px-5 md:px-10`;
const RightFormCenter = tw.div`text-center mb-10`;
const ErrorMessage = tw.p`text-red-700 text-center mb-8`;
const HeadLine = tw.h1`font-bold text-3xl text-gray-900`;
const Paragraphe = tw.p`font-medium`;
const Position = tw.div`flex -mx-3`;
const Container_Name = tw.div`w-1/2 px-3 mb-5`;
const Container_Email = tw.div`w-full px-3 mb-5`;
const Container_Password = tw.div`w-full px-3 mb-12`;
const Container_Button = tw.div`w-full px-3 mb-5`;
const SubmitButton = tw.button`block w-full max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;
interface Values {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const apolloClient = useApolloClient();

  const [register] = useRegisterMutation();

  const handleFormSubmit = async (values: Values) => {
    const response = await register({ variables: values });

    apolloClient.resetStore();
    await router.push("/");
  };

  return (
    <Wrapper>
      <ContainerForm>
        <RightForm>
          <RightFormCenter>
            <Image
              src="/Logo-mountain.png"
              alt="Picture of the author"
              width={220}
              height={140}
            />
            <HeadLine>Créer votre compte !</HeadLine>
            <Paragraphe>Entrez vos informations pour vous inscrire</Paragraphe>
          </RightFormCenter>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
            }}
            onSubmit={handleFormSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Position>
                  <Container_Name>
                    <InputField
                      icon="person"
                      label="Nom"
                      name="name"
                      type="text"
                      placeholder="Dupont"
                      required
                    />
                  </Container_Name>

                  <Container_Name>
                    <InputField
                      icon="person"
                      label="Prenom"
                      name="surname"
                      type="text"
                      placeholder="Jean"
                      required
                    />
                  </Container_Name>
                </Position>
                <Position>
                  <Container_Email>
                    <InputField
                      icon="alternate_email"
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jean@dupont.com"
                      required
                    />
                  </Container_Email>
                </Position>
                <div>
                  <Position>
                    <Container_Password>
                      <InputField
                        icon="https"
                        label="Mot de passe"
                        name="password"
                        type="password"
                        placeholder="********"
                        required
                      />
                    </Container_Password>
                  </Position>
                </div>
                <div>
                  {isError ? (
                    <ErrorMessage>
                      *mot de passe trop court. le mot de passe doit comporter
                      minimum 8 caractères
                    </ErrorMessage>
                  ) : (
                    ""
                  )}
                </div>
                <Position>
                  <Container_Button>
                    <SubmitButton type="submit">
                      S'inscrire maintenant
                    </SubmitButton>
                  </Container_Button>
                </Position>
                <div tw="w-full text-center font-medium	text-xs text-gray-700 ">
                  <a href="/login">Déjà un compte chez nous ?</a>
                </div>
              </Form>
            )}
          </Formik>
        </RightForm>
      </ContainerForm>
      <Banner />
    </Wrapper>
  );
}
