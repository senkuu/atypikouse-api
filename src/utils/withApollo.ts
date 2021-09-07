import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { SearchOfferResponse } from "../generated/graphql";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: process.env.GRAPHQL_API_URI ?? "http://localhost:4000/graphql",
    credentials: "include",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            offers: {
              keyArgs: [],
              merge(
                existing: SearchOfferResponse | undefined,
                incoming: SearchOfferResponse
              ): SearchOfferResponse {
                return {
                  offers: [...(existing?.offers || []), ...incoming.offers],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
