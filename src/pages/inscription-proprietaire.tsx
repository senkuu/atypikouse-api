import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import tw, { styled } from "twin.macro";
import { useRegisterMutation } from "../generated/graphql";
import InputField from "../components/InputField";
import { useApolloClient } from "@apollo/client";
import StepContainer from "../components/StepContainer";
import OwnerHero from "../components/OwnerHero";

const Wrapper = styled.div`
  ${tw`w-screen p-6 space-y-8`}
  background: #F9F7F2;
`;
// 1ère section
const ContainerForm = styled.div`
  ${tw`flex  w-full h-screen justify-center items-center`}
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
  userType: string;
  status: string;
}
export default function SignInOwner() {
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
      <main tw="mt-10 space-y-24">
        <OwnerHero />
        <StepContainer />
        <ContainerForm>
          <RightForm>
            <RightFormCenter>
              <HeadLine>Faites votre demande !</HeadLine>
              <Paragraphe>
                Entrez vos informations pour vous inscrire
              </Paragraphe>
            </RightFormCenter>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                userType: "owner",
                status: "activationPending",
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
                        Envoyer la demande
                      </SubmitButton>
                    </Container_Button>
                  </Position>
                </Form>
              )}
            </Formik>
          </RightForm>
        </ContainerForm>
      </main>
    </Wrapper>
  );
}
