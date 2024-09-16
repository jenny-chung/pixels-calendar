/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMoodEntry = /* GraphQL */ `
  mutation CreateMoodEntry(
    $input: CreateMoodEntryInput!
    $condition: ModelMoodEntryConditionInput
  ) {
    createMoodEntry(input: $input, condition: $condition) {
      id
      date
      mood
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMoodEntry = /* GraphQL */ `
  mutation UpdateMoodEntry(
    $input: UpdateMoodEntryInput!
    $condition: ModelMoodEntryConditionInput
  ) {
    updateMoodEntry(input: $input, condition: $condition) {
      id
      date
      mood
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMoodEntry = /* GraphQL */ `
  mutation DeleteMoodEntry(
    $input: DeleteMoodEntryInput!
    $condition: ModelMoodEntryConditionInput
  ) {
    deleteMoodEntry(input: $input, condition: $condition) {
      id
      date
      mood
      createdAt
      updatedAt
      __typename
    }
  }
`;
