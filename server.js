import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, quotes } from "./fakedb.js";

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
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user.id === args.id),
    quotes: () => quotes,
    iquote: (_, args) => quotes.filter((q) => q.by === args.by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
