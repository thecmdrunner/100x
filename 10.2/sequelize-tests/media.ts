import db from "../models";
import { DataTypes } from "sequelize";
import media from "../models/media";

const Media = media(db.sequelize, DataTypes);

const newMedia = await Media.create({
  index: 0,
  postId: 1,
  mediaUrl: "https://avatars.githubusercontent.com/u/38887390?v=4",
  type: "image",
});

console.log("New auto-generated ID:", newMedia.id);
