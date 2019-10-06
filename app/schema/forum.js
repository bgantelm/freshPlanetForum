import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    forums: [Forum]
  }

  type Forum {
    id: ID!
    name: String
    users: [User]
    messages: [Message]
  }

  extend type Mutation {
    createForum(name: String!, userId: ID!): Forum!
    joinForum(forumId: ID!, userId: ID!): Forum!
  }
`