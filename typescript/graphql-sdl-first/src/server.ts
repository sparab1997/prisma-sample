import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import { createContext } from './context'

new ApolloServer({ typeDefs, resolvers, context: createContext }).listen(
  { port: 4000 },
  () =>
    console.log(
      `đ Server ready at: http://localhost:4000\nâ­ď¸ See sample queries: http://pris.ly/e/ts/graphql-sdl-first#using-the-graphql-api`,
    ),
)
