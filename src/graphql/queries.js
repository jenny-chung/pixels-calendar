/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMoodEntry = /* GraphQL */ `
  query GetMoodEntry($id: ID!) {
    getMoodEntry(id: $id) {
      id
      date
      mood
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMoodEntries = /* GraphQL */ `
  query ListMoodEntries(
    $filter: ModelMoodEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoodEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        mood
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
