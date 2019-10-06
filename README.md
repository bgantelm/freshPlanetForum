# GraphQL API

Technical test FreshPlanet

## Getting Started


### launch

You have to install node modules and start the server

```
yarn install && start
```

### Part1

#### Schema (Query, Types, Mutation)

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
}

type Forum {
    id: ID!
    name: String
    users: [User]
    messages: [Message]
}

type Message {
    id: ID!
    text: String
    sendingTime: String!
    sender: User!
}

type Mutation {
    createForum(name: String!, userId: ID!): Forum!
    joinForum(forumId: ID!, userId: ID!): Forum!
    createMessage(text: String!, forumId: ID!, userId: ID!): Message!
}
```
#### Exemple with pre-populated data

User join a forum:

```
mutation {
    joinForum(forumId: 11, userId: 3) {
        id
        name
        users {
            id
            name
            picture
        }
    }
}
```

User create a forum:

```
mutation {
    createForum(name: "newForum", userId: 3){
  	    id
  	    name
  	    users {
            id
            name
            picture
        }
	}
}
```

User create a message:

```
mutation {
    createMessage(text: "toto", forumId: 11, userId: 4) {
        id
        text
        sendingTime
        sender {
            id
            name
            picture
        }
    }
}
```

User can see the list of forums joined, list of available forums, the list of messages, information of the members of the forum:

```
query {
  user(id: 3){
  	id
  	name
  	picture
  	forums {
      id
  		name
    }
    forum(id: 11) {
      id
      name
      users {
        id
        name
        picture
      }
      messages {
        id
        sendingTime
        text
        sender{
          id
          name
          picture
        }
      }
    }
  }
  forums{
    id
  	name
  }
}
```

#### Notes

I did not handle the errors

### Part 2