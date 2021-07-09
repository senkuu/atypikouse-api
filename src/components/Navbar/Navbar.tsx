import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";

const HeaderMenu = tw.header`p-4 dark:bg-white dark:text-gray-700`;
const ContainerMenu = tw.div`container flex justify-between h-16 mx-auto md:justify-center md:space-x-8`;
const UlContainer = tw.ul`items-stretch hidden space-x-3 md:flex`;
const LiContainer = tw.li`flex`;
const Items = tw.a`flex items-center font-serif -mb-0.5 border-b-2 px-4 dark:border-transparent`;
const BtH = tw.a`flex items-center p-2`;
const ButtonNav = tw.button`bg-white p-4 md:hidden`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [logout] = useLogoutMutation();
  const { data, loading: meLoading } = useMeQuery();
  const apolloClient = useApolloClient();

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <>
        <HeaderMenu>
          <ContainerMenu>
            <UlContainer>
              <LiContainer>
                <Items href="#">Accueil</Items>
                <Items href="#">Nos hébergements</Items>
              </LiContainer>
            </UlContainer>
            <BtH href="/">
              <Image
                src="/Logo-mountain.png"
                alt="Picture of the author"
                width={150}
                height={100}
              />
            </BtH>
            <UlContainer>
              <LiContainer>
                <Items href="#">Devenir proprietaire</Items>
                <Items href="#">Contact</Items>
              </LiContainer>
            </UlContainer>
            <ButtonNav>
              <Icon style={{ color: "#222" }}>menu</Icon>
            </ButtonNav>
          </ContainerMenu>
        </HeaderMenu>
      </>
    );
  } else {
    body = (
      <>
        <HeaderMenu>
          <ContainerMenu>
            <UlContainer>
              <LiContainer>
                <Items href="#">Accueil</Items>
                <Items href="#">Nos hébergements</Items>
              </LiContainer>
            </UlContainer>
            <BtH href="/">
              <Image
                src="/Logo-mountain.png"
                alt="Picture of the author"
                width={150}
                height={100}
              />
            </BtH>
            <UlContainer>
              <LiContainer>
                <Items href="#">Devenir proprietaire</Items>
                <Items
                  onClick={() => {
                    logout();
                    apolloClient.resetStore();
                  }}
                >{`${data.me.surname} ${data.me.name}`}</Items>
              </LiContainer>
            </UlContainer>
            <ButtonNav>
              <Icon style={{ color: "#222" }}>menu</Icon>
            </ButtonNav>
          </ContainerMenu>
        </HeaderMenu>
      </>
    );
  }

  return body;
}
