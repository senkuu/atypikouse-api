import Link from "next/link";
import React from "react";
import tw from "twin.macro";

interface props {
  title: string;
  details: string;
  userName: string;
}

export default function CancelAccess(props: props) {
  return (
    <div tw="bg-gradient-to-r from-red-500 ">
      <div tw="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div tw="bg-white shadow-sm overflow-hidden sm:rounded-lg pb-8">
          <div tw="border-t-0 border-gray-200 text-center pt-8">
            <h1 tw="text-8xl font-bold font-serif text-Green-default">
              Halte là {props.userName}
            </h1>
            <h1 tw="text-3xl text-gray-900 font-medium py-8">{props.title}</h1>
            <p tw="text-2xl pb-8 px-12 text-gray-900 font-medium">
              {props.details}
            </p>
            <button tw="bg-Green-light text-white font-semibold px-6 py-3 rounded-md mr-6">
              <Link href="/">Accueil</Link>
            </button>
            <button tw="bg-Green-default text-white font-semibold px-6 py-3 rounded-md">
              <Link href="/FAQ">FAQ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
