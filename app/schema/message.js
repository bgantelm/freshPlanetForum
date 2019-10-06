import { gql } from 'apollo-server-express'

export default gql`
type Message {
    id: ID!
    text: String
    sendingTime: String!
    sender: User!
  }

  extend type Mutation {
    createMessage(text: String!, forumId: ID!, userId: ID!): Message!
  }
`