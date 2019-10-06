import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import * as fixtures from "./fixtures"
import typeDefs from './schema'
import resolvers from './resolvers'
 
const server = new ApolloServer({ typeDefs, resolvers, context: {
  Users: fixtures.Users,
  Forums: fixtures.Forums
}})
 
const app = express()
server.applyMiddleware({ app })
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)