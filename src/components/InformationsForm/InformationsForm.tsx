import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { useMeQuery, useUpdateUserMutation } from "../../generated/graphql";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import { Icon, Link } from "@material-ui/core";

interface Values {
  id: number;
  website: string;
  description: string;
  name: string;
  surname: string;
  email: string;
  //   city: string;
}

const SubmitButton = tw.button`block w-full max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;

function InformationsForm() {
  const { data } = useMeQuery();
  const [upadateUser] = useUpdateUserMutation();
  const [alert, setAlert] = useState(false);

  const handleFormSubmit = async (values: Values) => {
    const response = await upadateUser({ variables: values });
    console.log(response);
  };

  const checkURL = () => {
    let website = "";
    if (data?.me?.website === undefined) {
      return website;
    } else if (data?.me?.website === null) {
      return website;
    } else {
      let userWebsite: string = data?.me?.website;
      return userWebsite;
    }
  };

  const checkDescription = () => {
    let desc = "";
    if (data?.me?.description === undefined) {
      return desc;
    } else if (data?.me?.description === null) {
      return desc;
    } else {
      let userDescription: string = data?.me?.description;
      return userDescription;
    }
  };

  return (
    <Wrapper>
      <div>
        <div tw="md:grid md:grid-cols-3 md:gap-6">
          <div tw="md:col-span-1">
            <div tw="h-full px-4 sm:p-4">
              <h3 tw="text-5xl font-serif pt-2 text-gray-900 text-center">
                Bonjour {data?.me?.surname}
              </h3>
              <p tw="mt-3 text-lg font-medium text-gray-600 text-center ">
                Voici votre page profil.
              </p>
              <Link href="/bookings">
                <div tw="mt-5 px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <SubmitButton>Vos réservations</SubmitButton>
                </div>
              </Link>
            </div>
          </div>
          <div tw="mt-5 md:mt-0 md:col-span-2">
            <Formik
              initialValues={{
                id: data!.me!.id,
                website: checkURL(),
                description: checkDescription(),
                name: data!.me!.name,
                surname: data!.me!.surname,
                email: data!.me!.email,
                // city: "",
              }}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div tw="shadow-sm sm:overflow-hidden">
                    <div tw="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div tw="grid grid-cols-2 gap-6">
                        <div tw="col-span-3">
                          <div tw="mt-1 flex">
                            <InputField
                              icon="http"
                              label="Site web"
                              name="website"
                              type="text"
                              placeholder="nomdedomaine.com"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div tw="mt-1">
                          <InputField
                            icon="subject"
                            label="A propos de vous"
                            name="description"
                            type="text"
                            placeholder="Racontez-nous comment vous êtes unique."
                            required
                          />
                        </div>
                        <p tw="mt-2 text-sm text-gray-500">
                          Brève description de votre profil.
                        </p>
                      </div>
                    </div>
                    <div tw="shadow-sm overflow-hidden sm:rounded-md">
                      <div tw="px-4 py-5 bg-white sm:p-6">
                        <div tw="grid grid-cols-6 gap-6">
                          <div tw="col-span-6 sm:col-span-3">
                            <InputField
                              icon="person"
                              label="Nom"
                              name="name"
                              type="text"
                              placeholder={data?.me?.name}
                              required
                            />
                          </div>

                          <div tw="col-span-6 sm:col-span-3">
                            <InputField
                              icon="person"
                              label="Prenom"
                              name="surname"
                              type="text"
                              placeholder={data?.me?.surname}
                              required
                            />
                          </div>

                          <div tw="col-span-6 sm:col-span-4">
                            <InputField
                              icon="alternate_email"
                              label="Email"
                              name="email"
                              type="email"
                              placeholder={data!.me!.email}
                              required
                            />
                          </div>

                          {/* <div tw="col-span-6 sm:col-span-3">
                            <InputField
                              icon="markunread_mailbox"
                              label="Ville"
                              name="city"
                              type="text"
                              placeholder="Rouen"
                              required
                            />
                          </div> */}
                        </div>
                      </div>
                      <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <SubmitButton
                          type="submit"
                          onClick={() => setAlert(true)}
                        >
                          Enregistrer
                        </SubmitButton>
                      </div>
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
                          <p tw="ml-8">
                            Votre modification a bien été prise en compte.
                            N'hésitez pas à visiter notre{" "}
                            <a href="/FAQ" tw="font-medium">
                              FAQ
                            </a>
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default InformationsForm;
