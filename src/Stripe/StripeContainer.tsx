import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51IVG3DE4ja3AjZbrXOSl7LOfQY20AcGapLmIHKiRn1w5YnMDWwB4SHa6RMfRtUCZAKqbuLqg64RXt5xFeTnSDcEJ00is5ZnbFe";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function Stripe(props: { amount: number }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm amount={props.amount} />
    </Elements>
  );
};

export default Stripe;

