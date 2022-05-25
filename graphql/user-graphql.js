import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $password_confirmation: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      password_confirmation: $password_confirmation
    ) {
      id
      name
    }
  }
`
