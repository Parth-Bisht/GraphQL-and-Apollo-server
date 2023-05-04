import mongoose from "mongoose";
import { users, quotes } from "./fakedb.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User");
const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user._id === args._id),
    quotes: () => quotes,
    iquote: (_, args) => quotes.filter((q) => q.by === args.by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur._id),
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      // const _id = randomBytes(5).toString("hex");
      // const payload = {
      //   _id,
      //   ...userNew,
      // };
      // users.push(payload);
      // return users.find((user) => user._id === _id);
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already exists with that email");
      }
      const hashedpassword = await bcrypt.hash(userNew.password, 12);
      const newUser = new User({
        ...userNew,
        password: hashedpassword,
      });
      return await newUser.save();
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("User does not exist");
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
  },
};

export default resolvers;
