import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
  type Team {
    id: Int
    manager: String
    office: String
    project: String
  }
  type Query {
    teams: [Team]
  }
`
const teams = [
  {
    id: 1,
    manager: "manager",
    office: "office",
    project: "project"
  },
  {
    id: 2,
    manager: "manager2",
    office: "office2",
    project: "project2"
  },
]

const resolvers = {
  Query: {
    teams: () => teams
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const {url} = await startStandaloneServer(server, {
  listen: {port:4000}
})

console.log(`🚀  Server ready at ${url}`);
