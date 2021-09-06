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

export type AddPlanningDataInput = {
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['Float'];
  offer: Offer;
  occupant: User;
  review?: Maybe<Review>;
  adults: Scalars['Float'];
  children: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  touristTax: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BookingResponse = {
  __typename?: 'BookingResponse';
  errors?: Maybe<Array<FieldError>>;
  booking?: Maybe<Booking>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['Float'];
  name: Scalars['String'];
  departement: Departement;
  offers?: Maybe<Array<Offer>>;
  population: Scalars['Float'];
  users?: Maybe<Array<User>>;
};

export type CoordinatesInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type CreateBookingInput = {
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  offerId: Scalars['Float'];
  occupantId: Scalars['Float'];
  adults: Scalars['Float'];
  children: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  touristTax: Scalars['Float'];
  status: Scalars['String'];
  cancelReason?: Maybe<Scalars['String']>;
};

export type CreateOfferInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  coordinates?: Maybe<CoordinatesInput>;
  address?: Maybe<Scalars['String']>;
  touristTax: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  cityId: Scalars['Float'];
  ownerId: Scalars['Float'];
  offerTypeId: Scalars['Float'];
  deleteReason?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type CreateOfferTypeInput = {
  name: Scalars['String'];
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
};

export type Criteria = {
  __typename?: 'Criteria';
  id: Scalars['Float'];
  name: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  isGlobal: Scalars['Boolean'];
  criteriaType: Scalars['String'];
  offerTypes?: Maybe<Array<OfferType>>;
  offerCriterias?: Maybe<Array<OfferCriteria>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CriteriaInput = {
  id: Scalars['Float'];
  value: Scalars['String'];
};


export type Departement = {
  __typename?: 'Departement';
  id: Scalars['Float'];
  name: Scalars['String'];
  number: Scalars['String'];
  region: Region;
  cities: Array<City>;
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
  createOffer: OfferResponse;
  updateOffer: OfferResponse;
  addOfferCriterias?: Maybe<Offer>;
  removeOfferCriterias?: Maybe<Offer>;
  deleteOffer: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  updateUser?: Maybe<UserResponse>;
  deleteUser: Scalars['Boolean'];
  createBooking: BookingResponse;
  updateBooking?: Maybe<BookingResponse>;
  deleteBooking: Scalars['Boolean'];
  createCriteria: Criteria;
  updateCriteria?: Maybe<Criteria>;
  addCriteriaOfferTypes?: Maybe<Criteria>;
  removeCriteriaOfferTypes?: Maybe<Criteria>;
  deleteCriteria: Scalars['Boolean'];
  createOfferType: OfferTypeResponse;
  updateOfferType: OfferTypeResponse;
  addOfferTypeCriterias?: Maybe<OfferTypeResponse>;
  removeOfferTypeCriterias?: Maybe<OfferTypeResponse>;
  deleteOfferType: Scalars['Boolean'];
  addPlanningData: PlanningDataResponse;
  updatePlanningData?: Maybe<PlanningDataResponse>;
  removePlanningData: Scalars['Boolean'];
};


export type MutationCreateOfferArgs = {
  options: CreateOfferInput;
};


export type MutationUpdateOfferArgs = {
  options: UpdateOfferInput;
  id: Scalars['Float'];
};


export type MutationAddOfferCriteriasArgs = {
  criterias?: Maybe<Array<CriteriaInput>>;
  offerId: Scalars['Float'];
};


export type MutationRemoveOfferCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  offerId: Scalars['Float'];
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


export type MutationUpdateUserArgs = {
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationCreateBookingArgs = {
  options: CreateBookingInput;
};


export type MutationUpdateBookingArgs = {
  options: UpdateBookingInput;
  id: Scalars['Float'];
};


export type MutationDeleteBookingArgs = {
  id: Scalars['Float'];
};


export type MutationCreateCriteriaArgs = {
  isGlobal: Scalars['Boolean'];
  criteriaType: Scalars['String'];
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  additional?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateCriteriaArgs = {
  isGlobal?: Maybe<Scalars['Boolean']>;
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
  options: CreateOfferTypeInput;
};


export type MutationUpdateOfferTypeArgs = {
  options: UpdateOfferTypeInput;
  id: Scalars['Float'];
};


export type MutationAddOfferTypeCriteriasArgs = {
  criteriaIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationRemoveOfferTypeCriteriasArgs = {
  criteriaIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationDeleteOfferTypeArgs = {
  id: Scalars['Float'];
};


export type MutationAddPlanningDataArgs = {
  options: AddPlanningDataInput;
};


export type MutationUpdatePlanningDataArgs = {
  options: UpdatePlanningDataInput;
  id: Scalars['Float'];
};


export type MutationRemovePlanningDataArgs = {
  id: Scalars['Float'];
};

export type Notice = {
  __typename?: 'Notice';
  id: Scalars['Float'];
  user: User;
  linkedUser?: Maybe<User>;
  placeholder1?: Maybe<Scalars['String']>;
  placeholder2?: Maybe<Scalars['String']>;
  placeholder3?: Maybe<Scalars['String']>;
  placeholder4?: Maybe<Scalars['String']>;
  placeholder5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlType: Scalars['String'];
  noticeType: NoticeType;
  createdAt: Scalars['String'];
};

export type NoticeType = {
  __typename?: 'NoticeType';
  id: Scalars['Float'];
  name: Scalars['String'];
  defaultText: Scalars['String'];
  notices?: Maybe<Array<Notice>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Offer = {
  __typename?: 'Offer';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  touristTax: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  distance?: Maybe<Scalars['Float']>;
  sortScore?: Maybe<Scalars['Float']>;
  averageRating?: Maybe<Scalars['Float']>;
  city?: Maybe<City>;
  owner: User;
  offerType: OfferType;
  bookings?: Maybe<Array<Booking>>;
  photos?: Maybe<Array<Photo>>;
  offerCriterias?: Maybe<Array<OfferCriteria>>;
  planningData?: Maybe<Array<Planning>>;
  status: Scalars['String'];
  deleteReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OfferCriteria = {
  __typename?: 'OfferCriteria';
  id: Scalars['Float'];
  value: Scalars['String'];
  offer: Offer;
  criteria: Criteria;
};

export type OfferResponse = {
  __typename?: 'OfferResponse';
  errors?: Maybe<Array<FieldError>>;
  offer?: Maybe<Offer>;
};

export type OfferType = {
  __typename?: 'OfferType';
  id: Scalars['Float'];
  name: Scalars['String'];
  offers?: Maybe<Array<Offer>>;
  criterias?: Maybe<Array<Criteria>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OfferTypeResponse = {
  __typename?: 'OfferTypeResponse';
  errors?: Maybe<Array<FieldError>>;
  offerType?: Maybe<OfferType>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['Float'];
  filename: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  offer?: Maybe<Offer>;
};

export type Planning = {
  __typename?: 'Planning';
  id: Scalars['Float'];
  offer?: Maybe<Offer>;
  owner?: Maybe<User>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PlanningDataResponse = {
  __typename?: 'PlanningDataResponse';
  errors?: Maybe<Array<FieldError>>;
  planningData?: Maybe<Planning>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  offers: SearchOfferResponse;
  offer?: Maybe<Offer>;
  me?: Maybe<User>;
  users: Array<User>;
  user?: Maybe<User>;
  bookings?: Maybe<Array<Booking>>;
  booking?: Maybe<Booking>;
  criterias: Array<Criteria>;
  criteria?: Maybe<Criteria>;
  offerTypes: Array<OfferType>;
  offerType?: Maybe<OfferType>;
  cities?: Maybe<Array<City>>;
  city?: Maybe<City>;
  regions?: Maybe<Array<Region>>;
  region?: Maybe<Region>;
  departements?: Maybe<Array<Departement>>;
  departement?: Maybe<Departement>;
  plannings: Array<Planning>;
};


export type QueryOffersArgs = {
  status?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Float']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  cityId?: Maybe<Scalars['Float']>;
  coordinates?: Maybe<CoordinatesInput>;
};


export type QueryOfferArgs = {
  id: Scalars['Float'];
};


export type QueryUsersArgs = {
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryBookingsArgs = {
  hideCancelled?: Maybe<Scalars['Boolean']>;
  ownerId?: Maybe<Scalars['Float']>;
  occupantId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
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


export type QueryCitiesArgs = {
  regions?: Maybe<Array<Scalars['Float']>>;
  departements?: Maybe<Array<Scalars['Float']>>;
  orderBy?: Maybe<Scalars['String']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getRegions?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryCityArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getRegion?: Maybe<Scalars['Boolean']>;
  getDepartement?: Maybe<Scalars['Boolean']>;
  id: Scalars['Float'];
};


export type QueryRegionsArgs = {
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryRegionArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  id: Scalars['Float'];
};


export type QueryDepartementsArgs = {
  orderBy?: Maybe<Scalars['String']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getRegions?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryDepartementArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getRegion?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type QueryPlanningsArgs = {
  options: SearchPlanningDataInput;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['Float'];
  name: Scalars['String'];
  departements?: Maybe<Array<Departement>>;
};

export type RegisterInput = {
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  userType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['Float'];
  text: Scalars['String'];
  booking: Booking;
  rating: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type SearchOfferResponse = {
  __typename?: 'SearchOfferResponse';
  offers: Array<Offer>;
};

export type SearchPlanningDataInput = {
  ownerId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
};

export type UpdateBookingInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  adults?: Maybe<Scalars['Float']>;
  children?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  touristTax?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  cancelReason?: Maybe<Scalars['String']>;
};

export type UpdateOfferInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinatesInput>;
  address?: Maybe<Scalars['String']>;
  touristTax?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  cityId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  offerTypeId?: Maybe<Scalars['Float']>;
  deleteReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateOfferTypeInput = {
  name?: Maybe<Scalars['String']>;
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
};

export type UpdatePlanningDataInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  offers?: Maybe<Array<Offer>>;
  bookings?: Maybe<Array<Booking>>;
  city?: Maybe<City>;
  notices?: Maybe<Array<Notice>>;
  linkedNotices?: Maybe<Array<Notice>>;
  photo?: Maybe<Photo>;
  planningData?: Maybe<Array<Planning>>;
  userType: Scalars['String'];
  status: Scalars['String'];
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

export type BaseOfferFragment = (
  { __typename?: 'Offer' }
  & Pick<Offer, 'id' | 'title' | 'description' | 'touristTax' | 'distance' | 'sortScore' | 'averageRating' | 'latitude' | 'longitude' | 'priceTTC' | 'priceHT'>
  & { photos?: Maybe<Array<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'url' | 'mimetype'>
  )>>, city?: Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'name' | 'id'>
    & { departement: (
      { __typename?: 'Departement' }
      & Pick<Departement, 'number'>
    ) }
  )>, offerType: (
    { __typename?: 'OfferType' }
    & Pick<OfferType, 'id' | 'name'>
  ), owner: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
  ) }
);

export type BaseUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'surname' | 'email' | 'description' | 'website'>
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

export type CreateBookingMutationVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  adults: Scalars['Float'];
  children: Scalars['Float'];
  occupantId: Scalars['Float'];
  offerId: Scalars['Float'];
  priceTTC: Scalars['Float'];
  priceHT: Scalars['Float'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
  touristTax: Scalars['Float'];
}>;


export type CreateBookingMutation = (
  { __typename?: 'Mutation' }
  & { createBooking: (
    { __typename?: 'BookingResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & BaseErrorFragment
    )>>, booking?: Maybe<(
      { __typename?: 'Booking' }
      & Pick<Booking, 'id' | 'status' | 'startDate' | 'endDate' | 'adults' | 'children' | 'priceHT' | 'priceTTC' | 'cancelReason' | 'touristTax'>
      & { occupant: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'surname' | 'email'>
      ) }
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
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

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  password: Scalars['String'];
  userType: Scalars['String'];
  status: Scalars['String'];
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

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  website: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'website' | 'description' | 'name' | 'surname' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  )> }
);

export type BookingsQueryVariables = Exact<{
  occupantId?: Maybe<Scalars['Float']>;
}>;


export type BookingsQuery = (
  { __typename?: 'Query' }
  & { bookings?: Maybe<Array<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'id' | 'startDate' | 'endDate'>
    & { offer: (
      { __typename?: 'Offer' }
      & Pick<Offer, 'id' | 'title' | 'description' | 'priceHT' | 'priceTTC'>
    ) }
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & BaseUserFragment
  )> }
);

export type OfferQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type OfferQuery = (
  { __typename?: 'Query' }
  & { offer?: Maybe<(
    { __typename?: 'Offer' }
    & BaseOfferFragment
  )> }
);

export type OffersQueryVariables = Exact<{
  cityId: Scalars['Float'];
  getCities: Scalars['Boolean'];
  getDepartements: Scalars['Boolean'];
  ownerId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
}>;


export type OffersQuery = (
  { __typename?: 'Query' }
  & { offers: (
    { __typename?: 'SearchOfferResponse' }
    & { offers: Array<(
      { __typename?: 'Offer' }
      & BaseOfferFragment
    )> }
  ) }
);

export const BaseOfferFragmentDoc = gql`
    fragment BaseOffer on Offer {
  id
  title
  description
  photos {
    id
    url
    mimetype
  }
  touristTax
  city {
    name
    id
    departement {
      number
    }
  }
  distance
  sortScore
  averageRating
  latitude
  longitude
  priceTTC
  priceHT
  offerType {
    id
    name
  }
  owner {
    name
  }
}
    `;
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
  description
  website
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
export const CreateBookingDocument = gql`
    mutation createBooking($startDate: DateTime!, $endDate: DateTime!, $adults: Float!, $children: Float!, $occupantId: Float!, $offerId: Float!, $priceTTC: Float!, $priceHT: Float!, $status: String!, $cancelReason: String!, $touristTax: Float!) {
  createBooking(
    options: {startDate: $startDate, endDate: $endDate, adults: $adults, children: $children, occupantId: $occupantId, offerId: $offerId, priceTTC: $priceTTC, priceHT: $priceHT, status: $status, cancelReason: $cancelReason, touristTax: $touristTax}
  ) {
    errors {
      ...BaseError
    }
    booking {
      id
      status
      startDate
      endDate
      adults
      children
      priceHT
      priceTTC
      cancelReason
      occupant {
        id
        name
        surname
        email
      }
      touristTax
    }
  }
}
    ${BaseErrorFragmentDoc}`;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      adults: // value for 'adults'
 *      children: // value for 'children'
 *      occupantId: // value for 'occupantId'
 *      offerId: // value for 'offerId'
 *      priceTTC: // value for 'priceTTC'
 *      priceHT: // value for 'priceHT'
 *      status: // value for 'status'
 *      cancelReason: // value for 'cancelReason'
 *      touristTax: // value for 'touristTax'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $name: String!, $surname: String!, $password: String!, $userType: String!, $status: String!) {
  register(
    options: {name: $name, email: $email, surname: $surname, password: $password, userType: $userType, status: $status}
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
 *      userType: // value for 'userType'
 *      status: // value for 'status'
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
export const UpdateUserDocument = gql`
    mutation updateUser($id: Float!, $website: String!, $description: String!, $name: String!, $surname: String!, $email: String!) {
  updateUser(
    id: $id
    website: $website
    description: $description
    name: $name
    surname: $surname
    email: $email
  ) {
    user {
      id
      website
      description
      name
      surname
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      website: // value for 'website'
 *      description: // value for 'description'
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const BookingsDocument = gql`
    query bookings($occupantId: Float) {
  bookings(occupantId: $occupantId) {
    id
    offer {
      id
      title
      description
      priceHT
      priceTTC
    }
    startDate
    endDate
  }
}
    `;

/**
 * __useBookingsQuery__
 *
 * To run a query within a React component, call `useBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookingsQuery({
 *   variables: {
 *      occupantId: // value for 'occupantId'
 *   },
 * });
 */
export function useBookingsQuery(baseOptions?: Apollo.QueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
      }
export function useBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
        }
export type BookingsQueryHookResult = ReturnType<typeof useBookingsQuery>;
export type BookingsLazyQueryHookResult = ReturnType<typeof useBookingsLazyQuery>;
export type BookingsQueryResult = Apollo.QueryResult<BookingsQuery, BookingsQueryVariables>;
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
export const OfferDocument = gql`
    query Offer($id: Float!) {
  offer(id: $id) {
    ...BaseOffer
  }
}
    ${BaseOfferFragmentDoc}`;

/**
 * __useOfferQuery__
 *
 * To run a query within a React component, call `useOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOfferQuery(baseOptions: Apollo.QueryHookOptions<OfferQuery, OfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfferQuery, OfferQueryVariables>(OfferDocument, options);
      }
export function useOfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfferQuery, OfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfferQuery, OfferQueryVariables>(OfferDocument, options);
        }
export type OfferQueryHookResult = ReturnType<typeof useOfferQuery>;
export type OfferLazyQueryHookResult = ReturnType<typeof useOfferLazyQuery>;
export type OfferQueryResult = Apollo.QueryResult<OfferQuery, OfferQueryVariables>;
export const OffersDocument = gql`
    query Offers($cityId: Float!, $getCities: Boolean!, $getDepartements: Boolean!, $ownerId: Float, $status: String) {
  offers(
    cityId: $cityId
    getCities: $getCities
    getDepartements: $getDepartements
    ownerId: $ownerId
    status: $status
  ) {
    offers {
      ...BaseOffer
    }
  }
}
    ${BaseOfferFragmentDoc}`;

/**
 * __useOffersQuery__
 *
 * To run a query within a React component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersQuery({
 *   variables: {
 *      cityId: // value for 'cityId'
 *      getCities: // value for 'getCities'
 *      getDepartements: // value for 'getDepartements'
 *      ownerId: // value for 'ownerId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useOffersQuery(baseOptions: Apollo.QueryHookOptions<OffersQuery, OffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
      }
export function useOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
        }
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersLazyQueryHookResult = ReturnType<typeof useOffersLazyQuery>;
export type OffersQueryResult = Apollo.QueryResult<OffersQuery, OffersQueryVariables>;