import React from "react";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useBookingsQuery, useMeQuery } from "../../generated/graphql";

const Wrapper = styled.div`
  ${tw`w-screen pt-10`}
  background: #F9F7F2;
`;

export default function BookingCard() {
  const { data: userMe } = useMeQuery();
  const { data, loading } = useBookingsQuery({
    variables: {
      occupantId: userMe!.me!.id,
    },
  });

  if (!data && loading) {
    return <p>Chargement de vos réservations</p>;
  }

  if (data) {
    console.log(data.bookings);
  }

  if (!data) {
    return <p>vous avez aucune réservation chez AtypikHouse à ce jour.</p>;
  }

  return (
    <Wrapper>
      <h1 tw="p-10 text-3xl md:text-5xl text-center font-serif">
        Vos réservations :
      </h1>
      <div tw="p-10 mt-10 flex items-center justify-center flex-col">
        {data.bookings &&
          data.bookings.map((booking, index) => (
            <div key={index}>
              <div tw="container mx-auto px-20 mt-10 w-screen">
                <div tw="bg-white p-8 rounded-lg shadow-lg relative shadow-lg">
                  <h1 tw="text-2xl text-gray-800 font-semibold mb-3">
                    Annonce : {booking.offer.title}.
                  </h1>
                  <h3 tw="text-xl text-gray-800 font-semibold mb-3">
                    {booking.offer.priceTTC} €
                  </h3>
                  <p tw="text-gray-600 leading-6 tracking-normal">
                    {booking.offer.description}
                  </p>
                  <p tw="text-gray-800 leading-6 tracking-normal mt-10">
                    début de séjour(s) : {booking.startDate.split("T")[0]} et
                    date de fin : {booking.endDate.split("T")[0]}.
                  </p>
                  <Link href={`/offers/${booking.offer.id}`}>
                    <button tw="py-2 px-4 mt-8 bg-Green-light text-white rounded-md shadow-xl">
                      Voir l'annonce
                    </button>
                  </Link>
                  <Link href={`/bookings/${booking.id}`}>
                    <button tw="py-2 px-4 ml-8 mt-8 text-yellow-500 bg-white rounded-md shadow-xl">
                      Mettre un avis
                    </button>
                  </Link>
                  <div>
                    <span tw="absolute py-2 px-8 text-sm text-white top-0 right-0 bg-Green-default rounded-md transform translate-x-2 -translate-y-3 shadow-xl">
                      Numéro de référence : {booking.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
}
