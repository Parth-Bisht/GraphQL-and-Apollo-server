import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quote]
    iquote(by: ID!): [Quote]
  }
  type User {
    id: ID!
    first_name: String
    last_name: String
    email: String
    password: String
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }
  type Mutation {
    signupUserDummy(userNew: UserInput!): User
  }
  input UserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
