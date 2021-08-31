import React from "react";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { Icon } from "@material-ui/core";
import Link from "next/link";

const Wrapper = styled.div`
  ${tw`w-screen`}
  background: #F9F7F2;
`;
const Container = tw.div`w-2/12 h-auto relative m-12 mt-5 ease-linear transition-all duration-150 hover:shadow-lg hover:opacity-70 `;
const ChildContainer = tw.div`absolute flex flex-col justify-center z-20 w-full h-12 mt-48`;
const Title = tw.h3`font-serif text-lg text-center text-white  md:text-3xl`;
const SubmitButton = tw.button`block w-3/6 mt-10 max-w-xs mx-auto bg-Green-default hover:bg-Green-light focus:bg-Green-default text-white rounded-lg px-3 py-3 font-semibold uppercase`;

export default function Suggestions() {
  const router = useRouter();

  return (
    <Wrapper>
      <h1 tw="font-serif text-4xl text-center mb-10">
        Où souhaitez vous aller ?
      </h1>
      <div tw="flex flex-col justify-center md:flex-wrap md:flex-row ">
        <Container>
          <ChildContainer>
            <Title>Rénover</Title>
            <Link href="/">
              <SubmitButton>
                <Icon tw="mr-2" style={{ color: "white", fontSize: 12 }}>
                  arrow_forward_ios
                </Icon>
                More
              </SubmitButton>
            </Link>
          </ChildContainer>

          <Image
            src="/suggestion_1.jpg"
            alt="Photo de maison atypique"
            width={400}
            height={540}
          />
        </Container>
        <Container>
          <ChildContainer>
            <Title>Isolée</Title>
            <Link href="/">
              <SubmitButton>
                <Icon tw="mr-2" style={{ color: "white", fontSize: 12 }}>
                  arrow_forward_ios
                </Icon>
                More
              </SubmitButton>
            </Link>
          </ChildContainer>
          <Image
            src="/suggestion_2.jpg"
            alt="Photo de maison atypique"
            width={400}
            height={540}
          />
        </Container>
        <Container>
          <ChildContainer>
            <Title>Dans les arbres</Title>
            <Link href="/">
              <SubmitButton>
                <Icon tw="mr-2" style={{ color: "white", fontSize: 12 }}>
                  arrow_forward_ios
                </Icon>
                More
              </SubmitButton>
            </Link>
          </ChildContainer>
          <Image
            src="/suggestion_4.jpg"
            alt="Photo de maison atypique"
            width={400}
            height={540}
          />
        </Container>
      </div>
    </Wrapper>
  );
}
