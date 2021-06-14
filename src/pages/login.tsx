import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import tw, { styled } from "twin.macro";
import Icon from "@material-ui/core/Icon";
import { useRouter } from "next/router";
import InputField from "../components/InputField";
import Image from "next/image"

const Wrapper = tw.div`flex flex-wrap mb-2.5`
const ColLeft  = styled.div`
${tw`flex lg:w-5/12 w-0 bg-gray-900 h-screen bg-cover `}
background-image: url('https://cdn.discordapp.com/attachments/779349667212165184/851801715812204614/karsten-winegeart-sStahKEhT9w-unsplash.jpg')
`
const ColRight = styled.div`
${tw`flex lg:w-7/12 w-full h-screen bg-white justify-center items-center`}
`
const RightForm = tw.div`w-full md:w-1/2 py-10 px-5 md:px-10`;
const RightFormCenter = tw.div`text-center mb-10`;
const HeadLine = tw.h1`font-bold text-3xl text-gray-800`;
const Paragraphe = tw.p`font-medium`;
const Position = tw.div`flex -mx-3`;
const Container_Email = tw.div`w-full px-3 mb-5`;
const Container_Password = tw.div`w-full px-3 mb-12`;
const Container_Button = tw.div`w-full px-3 mb-5`;
const SubmitButton = tw.button`block w-full max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;

interface registerProps {}

interface Values {
  email: string;
  password: string;
}


export default function Login() {

    
    const handleFormSubmit = async (
      values: Values,
      { setErrors }: FormikHelpers<Values>,
      
    ) => {
        console.log(values);
        

     }
     
    
    

    return(
      <>
      <Wrapper>
          <ColLeft/>
          <ColRight>
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
                          
                          <SubmitButton type="submit">
                          S'inscrire maintenant
                          </SubmitButton>
                      </Container_Button>
                  
                      </Position>
                  </Form>
                  )}
              </Formik>
          </RightForm>
      </ColRight>
      </Wrapper>
      </>
    )
}