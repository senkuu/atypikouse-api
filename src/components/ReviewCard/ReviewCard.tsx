import React from "react";
import Image from "next/image";

import tw, { styled } from "twin.macro";

interface Author {
  name: string;
  location: string;
  profilePictureURI: string;
}

interface props {
  author: Author;
  review: string;
}

const Card = tw.figure`bg-white shadow-lg p-8 md:flex md:p-0 lg:w-3/4 lg:h-64`;

const ProfilePics = tw.img`w-32 h-32 rounded-full mx-auto md:w-1/4 md:h-auto md:rounded-none`;

function ReviewCard(props: props) {
  return (
    <Card>
      <ProfilePics src={props.author.profilePictureURI} />
      <div tw="pt-6 text-center space-y-4 md:text-left md:p-8">
        <blockquote>
          <p tw="text-lg font-semibold">“{props.review}”</p>
        </blockquote>
        <figcaption tw="font-medium">
          <div tw="text-Green-light">{props.author.name}</div>
          <div tw="text-gray-500">{props.author.location}</div>
        </figcaption>
      </div>
    </Card>
  );
}

export default ReviewCard;
