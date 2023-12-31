"use strict";

import { Model, Sequelize, type DataTypes as _DataTypes } from "sequelize";
import UserModel from "./user";

export const PostModel = (
  sequelize: Sequelize,
  DataTypes: typeof _DataTypes
): any => {
  class Post extends Model {}
  Post.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["post", "repost", "reply"],
        defaultValue: "post",
        allowNull: false,
      },
      referenceId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: Post,
          key: "id",
        },
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: UserModel(sequelize, DataTypes),
          key: "id",
        },
      },
      content: {
        type: DataTypes.STRING(280),
        allowNull: false,
      },
      postedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Post;
};
export default PostModel;
