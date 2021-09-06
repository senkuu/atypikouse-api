import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { Icon } from "@material-ui/core";

export default function Nav() {
  const [logout] = useLogoutMutation();
  const { data, loading: meLoading } = useMeQuery();
  const apolloClient = useApolloClient();

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <header tw="text-gray-600">
        <div tw="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a tw="flex font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
              <Image
                src="/Logo-mountain.png"
                alt="Logo d'atypikhouse"
                width={150}
                height={100}
              />{" "}
            </a>
          </Link>
          <nav tw="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link href="/">
              <a tw="mr-5 hover:text-gray-900">Accueil</a>
            </Link>
            <Link href="/offers">
              <a tw="mr-5 hover:text-gray-900">Nos hebergements</a>
            </Link>
            <Link
              href="/inscription-proprietaire"
              tw="mr-5 hover:text-gray-900"
            >
              <a tw="mr-5 hover:text-gray-900">Devenir propriétaire</a>
            </Link>
            <Link href="/contact" tw="mr-5 hover:text-gray-900">
              <a tw="mr-5 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <Link href="/login">
            <button tw="inline-flex items-center no-underline	 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-sm text-base mt-4 md:mt-0">
              Se connecter
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                tw="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    );
  } else {
    body = (
      <header tw="text-gray-600">
        <div tw="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a tw="flex font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0">
              <Image
                src="/Logo-mountain.png"
                alt="Logo d'atypikhouse"
                width={150}
                height={100}
              />{" "}
            </a>
          </Link>
          <nav tw="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link href="/">
              <a tw="mr-5 hover:text-gray-900">Accueil</a>
            </Link>
            <Link href="/offers">
              <a tw="mr-5 hover:text-gray-900">Nos hebergements</a>
            </Link>
            <Link
              href="/inscription-proprietaire"
              tw="mr-5 hover:text-gray-900"
            >
              <a tw="mr-5 hover:text-gray-900">Devenir propriétaire</a>
            </Link>
            <Link href="/contact" tw="mr-5 hover:text-gray-900">
              <a tw="mr-5 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <Link href="/account">
            <button tw="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-sm text-base mt-4 md:mt-0">
              Mon compte
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                tw="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <button
            onClick={() => {
              logout();
              apolloClient.resetStore();
            }}
          >
            <Icon
              style={{
                marginTop: "5px",
                marginLeft: "20px",
                color: "red",
                fontSize: 24,
              }}
            >
              exit_to_app
            </Icon>
          </button>
        </div>
      </header>
    );
  }

  return body;
}
