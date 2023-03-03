import gql from 'apollo-server';

const typeDefs = `  
  type Team {
      id: Int
      manager: String
      office: String
      project: String
  }
  type Query {
    teams: [Team]
  }`

export default typeDefs;