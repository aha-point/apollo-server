import gql from 'apollo-server';

const typeDefs = `  
  type Point {
      id: Int
      name: String
      number: String
  }
  type Query {
    points: [Point]
  }`

export default typeDefs;