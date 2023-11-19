import db from "../models";
import { DataTypes } from "sequelize";
import PostModel from "../models/post";

const Post = PostModel(db.sequelize, DataTypes);

const createdAtAndPostedAt = new Date();

const newPost = await Post.create({
  userId: 1,
  type: "post",
  content: "Hello, world!",
  createdAt: createdAtAndPostedAt,
  postedAt: createdAtAndPostedAt,
});

console.log("New auto-generated ID:", newPost.id);
