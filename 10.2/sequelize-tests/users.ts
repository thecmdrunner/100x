import { z } from "zod";
import db from "../models";
import user from "../models/user";
import { DataTypes } from "sequelize";

const User = user(db.sequelize, DataTypes);

const sanitizedNewUser = z.object({
  name: z.string().min(1).max(120),
  username: z.string().min(1).max(30),
  email: z.string().email(),
  emailVerifiedAt: z.date().optional(),
  passwordHash: z.string().min(8).max(512),
  bio: z.string().min(1).max(160),
  location: z.string().min(1).max(30),
  website: z.string().min(1).max(100),
  dateOfBirth: z.date(),
  profilePicture: z.string().min(1).max(1024),
  coverPicture: z.string().min(1).max(1024),
  isPublic: z.boolean().default(true),
});

const newUser = await User.create(
  sanitizedNewUser.parse({
    name: "Pranav",
    username: "thecmdrunner",
    email: "hey@pranava.dev",
    emailVerifiedAt: new Date(),
    passwordHash: "hashedPassword",
    bio: "Nice.",
    location: "India",
    website: "https://pranava.dev",
    dateOfBirth: new Date("2000-01-01"),
    profilePicture: "https://avatars.githubusercontent.com/u/38887390?v=4",
    coverPicture: "https://avatars.githubusercontent.com/u/38887390?v=4",
  })
);

console.log("New User's auto-generated ID:", newUser.id);
