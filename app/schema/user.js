import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    user(id: ID!): User
  }

  type User {
      id: ID!
      name: String
      picture: String
      forums: [Forum]
      forum(id: ID!): Forum
  }
`