import React from "react";
import axios from 'axios';

import { useRouter } from 'next/router';

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import tw from "twin.macro";

const Button = tw.button`bg-Green-default px-6 py-3 text-sm md:text-lg text-white mt-6 duration-500 hover:bg-Green-light w-full font-serif`;

export function CheckoutForm(props: { amount: number }) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);

      try {
        const response = await axios.post(
          "http://localhost:4000/stripe/charge",
          {
            amount: props.amount,
            id: paymentMethod!.id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          router.push("/");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }

    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button>Reserver</Button>
    </form>
  );
};

