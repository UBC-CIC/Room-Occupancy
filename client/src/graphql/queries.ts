/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCamList = /* GraphQL */ `query GetCamList {
  getCamList {
    Rows
    Column
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCamListQueryVariables,
  APITypes.GetCamListQuery
>;
