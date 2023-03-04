import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import pkg from 'graphql-errors';
import axios from 'axios';

// 각 파일마다 프로젝트의 쿼리 작성 예정
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

// const resolvers = {
//   Query: {
//     teams: () => teams,
//     points: () => points
//   }
// }

const resolvers = {
  Query: {
    teams: async () => {
      const response = await axios.post("http://localhost:8080/graphql");
      return response.data;
    }
  }
}

// const gateway = new ApolloGateway({
//   serviceList: [
//     { name: 'stock', url: 'http://localhost:9501/graphql' },
//     { name: 'entity', url: 'http://localhost:9502/graphql' }
//   ]
// });


const { formatError } = pkg;
const server = new ApolloServer({ typeDefs, resolvers,
  formatError: error => {
    return {
      message: error.message,
      locations: error.locations,
      path: error.path,
      ...error.extensions.exception // this line is important!
    };
  }
})

const {url} = await startStandaloneServer(server, {
  listen: {port:4000}
})

console.log(`🚀  Server ready at ${url}`);
