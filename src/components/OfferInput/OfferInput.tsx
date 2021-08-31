import React from "react";
import tw from "twin.macro";
import InputField from "../InputField";
import { Formik, Form } from "formik";
import { useCreateBookingMutation, useMeQuery } from "../../generated/graphql";
import { useRouter } from "next/router";

const Button = tw.button`bg-Green-default px-6 py-3 text-sm md:text-lg text-white mt-6 duration-500 hover:bg-Green-light w-full font-serif`;
const BlockedButton = tw.button`bg-gray-600 px-6 py-3 text-sm md:text-lg text-white mt-6 duration-500 hover:bg-gray-900 w-full font-serif`;
const Container = tw.div``;
const H3 = tw.h3`font-serif text-sm lg:text-2xl font-bold`;
const H4 = tw.h4`font-serif text-base lg:text-lg`;
const HR = tw.hr`h-4 w-8/12 m-auto mt-4`;

interface props {
  price: number;
  offerId: number;
}

interface Values {
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  occupantId: number;
  offerId: number;
  priceHT: number;
  priceTTC: number;
  status: string;
  cancelReason: string;
}

function setMinDepartDate(startDateValue: string) {
  let minDate: Date;

  if (startDateValue !== "") {
    minDate = new Date(startDateValue);
  } else {
    minDate = new Date();
  }
  minDate.setDate(minDate.getDate() + 1);
  return minDate.toISOString().split("T")[0];
}

export default function OfferInput(props: props) {
  let [diffDays, setDiffdays] = React.useState(0);
  let [totalPrice, setTotalPrice] = React.useState(0);
  const { data, loading: meLoading } = useMeQuery();
  const [booking] = useCreateBookingMutation();
  const router = useRouter();

  let Deal = 0;
  let Price = props.price;
  let PriceHT = (Price * 80) / 100;

  const handleFormSubmit = async (values: Values) => {
    const response = await booking({ variables: values });
    console.log(response);

    if (response === null) {
      await router.push(`/offers/${values.offerId}`);
    }
    await router.push("/stripe");
  };

  function setDifferenceDate(startDateValue: string, endDateValue: string) {
    const diffTime = Math.abs(
      new Date(startDateValue).getTime() - new Date(endDateValue).getTime()
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDiffdays(diffDays);
    if (diffDays != 0) {
      totalPrice = Price * diffDays;
      if (Deal != 0) {
        totalPrice = totalPrice - Deal;
        setTotalPrice(totalPrice);
      } else setTotalPrice(totalPrice);
    }
  }

  let body = null;

  if (meLoading) {
  } else if (!data?.me) {
    body = (
      <div>
        <Formik
          initialValues={{
            startDate: new Date().toISOString().split("T")[0],
            endDate: "",
            adults: 0,
            children: 0,
            occupantId: 0,
            offerId: 0,
            priceHT: 0,
            priceTTC: 0,
            status: "",
            cancelReason: "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form tw="w-4/6 flex flex-col pt-2 pb-5 m-auto md:items-center">
              <Container>
                <InputField
                  icon="explore"
                  label="arrive"
                  type="date"
                  placeholder="Quand ? "
                  min={new Date().toISOString().split("T")[0]}
                  name="startDate"
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="explore_off"
                  label="depart"
                  name="endDate"
                  type="date"
                  placeholder="Quand ?"
                  min={setMinDepartDate(values.startDate)}
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="people"
                  label="adultes"
                  name="adults"
                  type="number"
                  onClick={() =>
                    setDifferenceDate(values.startDate, values.endDate)
                  }
                  placeholder="Combien?"
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="face"
                  label="enfant(s)"
                  name="children"
                  type="number"
                  placeholder="..."
                  required
                />
              </Container>

              <BlockedButton type="submit">Connectez-vous</BlockedButton>
            </Form>
          )}
        </Formik>
        <H4>
          séjour de :
          <span tw="text-gray-900 float-right text-base lg:text-lg">
            {diffDays} nuit(s) * {props.price}€
          </span>
        </H4>
        <H4>
          Réduction du moment :
          <span tw="text-red-500 float-right text-base lg:text-lg">
            -{Deal} €
          </span>
        </H4>
        <HR />
        <H3>
          Total :
          <span tw="text-gray-900 float-right text-sm lg:text-lg">
            {totalPrice}€
          </span>
        </H3>
      </div>
    );
  } else {
    body = (
      <div>
        <Formik
          initialValues={{
            startDate: new Date().toISOString().split("T")[0],
            endDate: "",
            adults: 0,
            children: 0,
            occupantId: data!.me!.id,
            offerId: props.offerId,
            priceHT: PriceHT,
            priceTTC: Price,
            status: "WAITING_APPROVAL",
            cancelReason: "UNKNOWN",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form tw="w-4/6 flex flex-col pt-2 pb-5 m-auto md:items-center">
              <Container>
                <InputField
                  icon="explore"
                  label="arrive"
                  type="date"
                  placeholder="Quand ? "
                  min={new Date().toISOString().split("T")[0]}
                  name="startDate"
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="explore_off"
                  label="depart"
                  name="endDate"
                  type="date"
                  placeholder="Quand ?"
                  min={setMinDepartDate(values.startDate)}
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="people"
                  label="adultes"
                  name="adults"
                  type="number"
                  onClick={() =>
                    setDifferenceDate(values.startDate, values.endDate)
                  }
                  placeholder="Combien?"
                  required
                />
              </Container>
              <Container>
                <InputField
                  icon="face"
                  label="enfant(s)"
                  name="children"
                  type="number"
                  placeholder="..."
                  required
                />
              </Container>
              <Button type="submit">Reserver</Button>
            </Form>
          )}
        </Formik>
        <H4>
          séjour de :
          <span tw="text-gray-900 float-right text-base lg:text-lg">
            {diffDays} nuit(s) * {props.price}€
          </span>
        </H4>
        <H4>
          Réduction du moment :
          <span tw="text-red-500 float-right text-base lg:text-lg">
            -{Deal} €
          </span>
        </H4>
        <HR />
        <H3>
          Total :
          <span tw="text-gray-900 float-right text-sm lg:text-lg">
            {totalPrice}€
          </span>
        </H3>
      </div>
    );
  }

  return body;
}
