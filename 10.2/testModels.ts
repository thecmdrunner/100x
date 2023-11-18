import db from "./models/index";
import user from "./models/user";
import { DataTypes } from "sequelize";

const User = user(db.sequelize, DataTypes);

const jane = await User.create({
  name: "Jane",
  username: "Doe",
  email: "jane.doe@example.com",
  // emailVerifiedAt: new Date(),
  passwordHash: "hashedpassword",
  bio: "This is Jane Doe.",
  location: "Cityville",
  website: "https://janedoe.com",
  dateOfBirth: "1990-01-01", //
});
console.log("Jane's auto-generated ID:", jane.id);

// console.log(User);
