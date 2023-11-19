import db from "../models";
import { DataTypes } from "sequelize";
import like from "../models/like";

const Like = like(db.sequelize, DataTypes);

const newLike = await Like.create({
  userId: 1,
  postId: 1,
});

console.log("New auto-generated ID:", newLike.id);
