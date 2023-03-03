import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import memberTypeDefs from './member.js';
import pointTypeDefs from './point.js';

const typeDefs = [memberTypeDefs, pointTypeDefs];

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

const points = [
  {
    id: 1,
    name: "name",
    number: "number",
  },
  {
    id: 2,
    name: "name2",
    number: "number2",
  },
]

const resolvers = {
  Query: {
    teams: () => teams,
    points: () => points
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const {url} = await startStandaloneServer(server, {
  listen: {port:4000}
})

console.log(`🚀  Server ready at ${url}`);
