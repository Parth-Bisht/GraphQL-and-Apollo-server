import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";

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
  Mutation: {
    signupUserDummy: (_, { userNew }) => {
      const id = randomBytes(5).toString("hex");
      const payload = {
        id,
        ...userNew,
      };
      users.push(payload);
      return users.find((user) => user.id === id);
    },
  },
};

export default resolvers;
