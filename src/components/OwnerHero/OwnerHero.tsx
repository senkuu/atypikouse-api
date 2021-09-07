import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";

const Container = tw.div`container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl`;
const Title = tw.h2`text-2xl font-bold font-serif tracking-tight text-center sm:text-5xl text-gray-800`;
const SubTitle = tw.p`max-w-3xl mx-auto mt-4 text-xl text-center text-Green-light`;
const Grid = tw.div`grid lg:gap-8 lg:grid-cols-2 lg:items-center`;
const TitleGrid = tw.h3`text-2xl font-bold tracking-tight sm:text-3xl text-Green-light`;
const LeftCol = tw.div`mt-12 space-y-12`;
const IconContainer = tw.div`flex items-center justify-center w-12 h-12 rounded-md bg-Green-light text-gray-900`;

export default function OwnerHero() {
  return (
    <section>
      <Container>
        <div>
          <Title>Pourquoi déposer vos annonces chez AtypikHouse</Title>
          <SubTitle>La plateforme qui certifie vos annonces</SubTitle>
        </div>
        <Grid>
          <div>
            <TitleGrid>Pourquoi AtypikHouse ? </TitleGrid>
            <p tw="mt-3 text-lg dark:text-gray-400"></p>
            <LeftCol>
              <div tw="flex">
                <div tw="flex-shrink-0">
                  <IconContainer>
                    <Icon style={{ color: "#222" }}>check</Icon>
                  </IconContainer>
                </div>
                <div tw="ml-4">
                  <h4 tw="text-lg font-medium leading-6 dark:text-Green-default">
                    Service de qualité
                  </h4>
                  <p tw="mt-2 dark:text-gray-400">
                    AtypikHouse met tout en oeuvre pour répondre à vos questions.
                    Notre support est à <b>votre disposition</b> par téléphone
                    ou bien par mail.
                  </p>
                </div>
              </div>
              <div tw="flex">
                <div tw="flex-shrink-0">
                  <IconContainer>
                    <Icon style={{ color: "#222" }}>check</Icon>
                  </IconContainer>
                </div>
                <div tw="ml-4">
                  <h4 tw="text-lg font-medium leading-6 dark:text-Green-default">
                    Annonces certifiées
                  </h4>
                  <p tw="mt-2 dark:text-gray-400">
                    Pour contrer les arnaques en ligne
                    <b> AtypikHouse s'engage à certifier</b> votre compte et vos
                    annonces pour rassurer les voyageurs.{" "}
                    <a href="FAQ" tw="text-Green-default">
                      En savoir plus sur notre système de certification.
                    </a>
                  </p>
                </div>
              </div>
              <div tw="flex">
                <div tw="flex-shrink-0">
                  <IconContainer>
                    <Icon style={{ color: "#222" }}>check</Icon>
                  </IconContainer>
                </div>
                <div tw="ml-4">
                  <h4 tw="text-lg font-medium leading-6 dark:text-Green-default">
                    Mise en avant
                  </h4>
                  <p tw="mt-2 dark:text-gray-400">
                    Il est important pour nous de <b>mettre en avant</b> les
                    propriétaires les plus investis dans notre plateforme, par
                    leur{" "}
                    <b>
                      ancienneté sur la plateforme ou leurs notes (avis
                      clients).
                    </b>
                  </p>
                </div>
              </div>
            </LeftCol>
          </div>
          <div aria-hidden="true" tw="mt-10 m-auto lg:mt-0 ">
            <Image
              src="/Owner-page.jpg"
              alt=""
              tw="mx-auto shadow-2xl"
              width={320}
              height={430}
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
}
