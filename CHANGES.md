# Part 2

## Schema (Query, Types, Mutation)

```
type Query {
    forums: [Forum]
    user(id: ID!): User
}

type User {
      id: ID!
      name: String
      picture: String
      forums: [Forum]
      forum(id: ID!): Forum
      isAdmin: Boolean
}

type Forum {
    id: ID!
    name: String
    users: [User]
    messages: [Message]
    isPrivate: Boolean
}

type Message {
    id: ID!
    text: String
    sendingTime: String!
    sender: User!
}

type Mutation {
    createForum(name: String!, userId: ID!, isPrivate: Boolean): Forum!
    joinForum(forumId: ID!, userId: ID!): Forum!
    createMessage(text: String!, forumId: ID!, userId: ID!): Message!
}
```
