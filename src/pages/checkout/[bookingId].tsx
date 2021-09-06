import React from "react";
import { useRouter } from 'next/router';

import StripeContainer from '../../Stripe/StripeContainer'

export default function CheckoutPage() {
  const router = useRouter();

  const { bookingId: bookingParameter } = router.query;

  const bookingId = Number(bookingParameter);
}
