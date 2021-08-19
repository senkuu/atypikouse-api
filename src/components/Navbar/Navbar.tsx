import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import Icon from "@material-ui/core/Icon";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import { useRouter } from "next/router";

const HeaderMenu = tw.header`p-4 dark:bg-white dark:text-gray-700`;
const ContainerMenu = tw.div`w-full	flex justify-between h-16 md:space-x-10 last:mr-4`;
const UlContainer = tw.ul`items-stretch hidden space-x-3 md:flex`;
const LiContainer = tw.li`flex`;
const Items = tw.a`flex items-center text-base font-serif -mb-0.5 border-b-2 px-4 dark:border-transparent`;
const ItemsMobile = tw.a`text-2xl font-serif p-3`;
const BtH = tw.a`flex items-center pl-2`;
const ButtonNav = tw.button`bg-white p-4 z-30 md:hidden`;
const SignUp = tw.a`hidden md:flex flex-col w-0 sm:w-36 pt-2 m-20 h-auto m-auto px-4 text-base font-serif text-white`;
const SignUpMobile = tw.button`block h-12 mt-14 px-4 border-transparent rounded-md shadow-sm text-base font-serif text-white bg-Green-default hover:bg-Green-light`;
const MobileMenu = tw.div`opacity-100 h-screen absolute top-0 inset-x-0 p-1 rounded-lg shadow-lg bg-white divide-y-2 divide-gray-50 z-20 overflow-scroll md:hidden`;
const MobileMenuItems = tw.div`h-screen flex items-center flex-col	justify-center pt-5 pb-6 px-5`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();

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
                <Items href="/">Accueil</Items>
                <Items href="offers">Nos hébergements</Items>
                <Items href="inscription-proprietaire">
                  Devenir proprietaire
                </Items>
                <Items href="contact">Contact</Items>
              </LiContainer>
            </UlContainer>
            <ButtonNav onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon style={{ color: "#222" }}>close</Icon>
              ) : (
                <Icon style={{ color: "#222" }}>menu</Icon>
              )}
            </ButtonNav>
            {isOpen ? (
              <MobileMenu>
                <MobileMenuItems>
                  <ItemsMobile href="/">Accueil</ItemsMobile>
                  <ItemsMobile href="offers">Nos hébergements</ItemsMobile>
                  <ItemsMobile href="inscription-proprietaire">
                    Devenir proprietaire
                  </ItemsMobile>
                  <ItemsMobile href="contact">Contact</ItemsMobile>
                  <ItemsMobile href="/register">
                    <SignUpMobile>
                      <a href="/register">S'inscire</a>
                    </SignUpMobile>
                  </ItemsMobile>
                </MobileMenuItems>
              </MobileMenu>
            ) : (
              <> </>
            )}
            <SignUp>
              <Icon
                onClick={() => setIsUser(!isUser)}
                style={{ color: "#222", fontSize: 40 }}
                tw="m-auto"
              >
                account_circle
              </Icon>
              {isUser ? (
                <div tw="flex flex-col rounded-lg w-32 p-6 pl-2 bg-white shadow-md z-50 relative">
                  <span tw="pt-2 pb-3">
                    <a
                      tw="text-black font-sans text-sm font-bold  cursor-pointer "
                      href="/register"
                    >
                      S'inscrire
                    </a>
                  </span>
                  <span tw="pb-3">
                    <a
                      tw="text-black font-sans text-sm  cursor-pointer "
                      href="/login"
                    >
                      Se connecter
                    </a>
                  </span>
                  <span>
                    <a
                      tw="text-black text-red-500 font-sans text-sm  cursor-pointer "
                      href="/FAQ"
                    >
                      Aide
                    </a>
                  </span>
                </div>
              ) : (
                <></>
              )}
            </SignUp>
          </ContainerMenu>
        </HeaderMenu>
      </>
    );
  } else {
    body = (
      <>
        <HeaderMenu>
          <ContainerMenu>
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
                <Items href="/">Accueil</Items>
                <Items href="offers">Nos hébergements</Items>
                <Items href="inscription-proprietaire">
                  Devenir proprietaire
                </Items>
                <Items href="contact">Contact</Items>
                <Items
                  onClick={() => {
                    logout();
                    apolloClient.resetStore();
                  }}
                >{`${data.me.surname} ${data.me.name}`}</Items>
              </LiContainer>
            </UlContainer>
            <ButtonNav onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon style={{ color: "#222" }}>close</Icon>
              ) : (
                <Icon style={{ color: "#222" }}>menu</Icon>
              )}
            </ButtonNav>
            {isOpen ? (
              <MobileMenu>
                <MobileMenuItems>
                  <ItemsMobile href="/">Accueil</ItemsMobile>
                  <ItemsMobile href="offers">Nos hébergements</ItemsMobile>
                  <ItemsMobile href="inscription-proprietaire">
                    Devenir proprietaire
                  </ItemsMobile>
                  <ItemsMobile href="contact">Contact</ItemsMobile>
                  <ItemsMobile href="/register">
                    <SignUpMobile>
                      <a href="/register">Mon Compte</a>
                    </SignUpMobile>
                  </ItemsMobile>
                </MobileMenuItems>
              </MobileMenu>
            ) : (
              <> </>
            )}
            <SignUp>
              <img
                onClick={() => setIsUser(!isUser)}
                alt=""
                tw="w-12 h-12 rounded-full"
                src="https://source.unsplash.com/41x41/?portrait"
              ></img>
              {isUser ? (
                <div tw="flex flex-col rounded-lg w-36 p-6 pl-2 bg-white shadow-md z-50 relative">
                  <span tw="text-black font-sans text-sm ">{`${data.me.surname} ${data.me.name}`}</span>
                  <span tw="pt-2">
                    <a
                      tw="text-black font-sans text-sm font-bold  cursor-pointer "
                      href="/"
                    >
                      Mon compte
                    </a>
                  </span>
                  <span tw="pb-3">
                    <a
                      tw="text-black font-sans text-sm  cursor-pointer "
                      href="/"
                    >
                      Mes réservations
                    </a>
                  </span>
                  <span>
                    <a
                      tw="text-red-500  cursor-pointer "
                      onClick={() => {
                        logout();
                        apolloClient.resetStore();
                        setIsUser(!isUser);
                        router.push("/");
                      }}
                    >
                      <Icon style={{ color: "#red", fontSize: 24 }}>
                        meeting_room
                      </Icon>
                    </a>
                  </span>
                </div>
              ) : (
                <></>
              )}
            </SignUp>
          </ContainerMenu>
        </HeaderMenu>
      </>
    );
  }

  return body;
}
