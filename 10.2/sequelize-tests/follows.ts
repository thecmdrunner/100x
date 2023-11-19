import db from "../models";
import { DataTypes } from "sequelize";
import follow from "../models/follow";

const Follow = follow(db.sequelize, DataTypes);

const newFollow = await Follow.create({
  followerId: 1,
  followingId: 2,
});

console.log("New auto-generated ID:", newFollow.id);
