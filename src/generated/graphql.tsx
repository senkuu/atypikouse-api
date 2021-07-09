import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['Float'];
  offer: Offer;
  occupant: User;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Criteria = {
  __typename?: 'Criteria';
  id: Scalars['Float'];
  name: Scalars['String'];
  additional: Scalars['String'];
  criteriaType: Scalars['String'];
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOffer: Offer;
  updateOffer?: Maybe<Offer>;
  addOfferCriterias?: Maybe<Offer>;
  removeOfferCriterias?: Maybe<Offer>;
  deleteOffer: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  createBooking: Booking;
  updateBooking?: Maybe<Booking>;
  deleteBooking: Scalars['Boolean'];
  createCriteria: Criteria;
  updateCriteria?: Maybe<Criteria>;
  addCriteriaOfferTypes?: Maybe<Criteria>;
  removeCriteriaOfferTypes?: Maybe<Criteria>;
  deleteCriteria: Scalars['Boolean'];
  createOfferType: OfferType;
  updateOfferType?: Maybe<OfferType>;
  addOfferTypeCriterias?: Maybe<OfferType>;
  removeOfferTypeCriterias?: Maybe<OfferType>;
  deleteOfferType: Scalars['Boolean'];
};


export type MutationCreateOfferArgs = {
  status: Scalars['String'];
  deleteReasons: Scalars['String'];
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  offerTypeId: Scalars['Float'];
  ownerId: Scalars['Float'];
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateOfferArgs = {
  deleteReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  offerTypeId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddOfferCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationRemoveOfferCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPasswordConfirm: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateBookingArgs = {
  cancelReason: Scalars['String'];
  status: Scalars['String'];
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  occupantId: Scalars['Float'];
  offerId: Scalars['Float'];
};


export type MutationUpdateBookingArgs = {
  cancelReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
};


export type MutationDeleteBookingArgs = {
  id: Scalars['Float'];
};


export type MutationCreateCriteriaArgs = {
  criteriaType: Scalars['String'];
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  additional?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateCriteriaArgs = {
  criteriaType?: Maybe<Scalars['String']>;
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  additional?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddCriteriaOfferTypesArgs = {
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationRemoveCriteriaOfferTypesArgs = {
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationDeleteCriteriaArgs = {
  id: Scalars['Float'];
};


export type MutationCreateOfferTypeArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  name: Scalars['String'];
};


export type MutationUpdateOfferTypeArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddOfferTypeCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationRemoveOfferTypeCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationDeleteOfferTypeArgs = {
  id: Scalars['Float'];
};

export type Offer = {
  __typename?: 'Offer';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner: User;
  offerType: OfferType;
  bookings: Array<Booking>;
  status: Scalars['String'];
  deleteReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OfferType = {
  __typename?: 'OfferType';
  id: Scalars['Float'];
  name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  offers: Array<Offer>;
  offer?: Maybe<Offer>;
  me?: Maybe<User>;
  bookings: Array<Booking>;
  booking?: Maybe<Booking>;
  criterias: Array<Criteria>;
  criteria?: Maybe<Criteria>;
  offerTypes: Array<OfferType>;
  offerType?: Maybe<OfferType>;
};


export type QueryOfferArgs = {
  id: Scalars['Float'];
};


export type QueryBookingArgs = {
  id: Scalars['Float'];
};


export type QueryCriteriaArgs = {
  id: Scalars['Float'];
};


export type QueryOfferTypeArgs = {
  id: Scalars['Float'];
};

export type RegisterInput = {
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  userType?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  userType: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type BaseErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type BaseUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'surname' | 'email'>
);

export type BaseUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & BaseErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & BaseUserFragment
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & BaseErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & BaseUserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & BaseUserFragment
  )> }
);

export const BaseErrorFragmentDoc = gql`
    fragment BaseError on FieldError {
  field
  message
}
    `;
export const BaseUserFragmentDoc = gql`
    fragment BaseUser on User {
  id
  name
  surname
  email
}
    `;
export const BaseUserResponseFragmentDoc = gql`
    fragment BaseUserResponse on UserResponse {
  errors {
    ...BaseError
  }
  user {
    ...BaseUser
  }
}
    ${BaseErrorFragmentDoc}
${BaseUserFragmentDoc}`;
export const RegisterDocument = gql`
    mutation Register($email: String!, $name: String!, $surname: String!, $password: String!) {
  register(
    options: {name: $name, email: $email, surname: $surname, password: $password}
  ) {
    errors {
      ...BaseError
    }
    user {
      ...BaseUser
    }
  }
}
    ${BaseErrorFragmentDoc}
${BaseUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUser
  }
}
    ${BaseUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;