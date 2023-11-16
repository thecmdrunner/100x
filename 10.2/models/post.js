"use strict";

import user from "./user";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.BIGINT(15),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING(280),
        allowNull: false,
      },
      referenceId: {
        type: DataTypes.BIGINT(15),
        allowNull: true,
        references: {
          model: Post,
          key: "id",
        },
      },
      userId: {
        type: DataTypes.BIGINT(15),
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["post", "repost", "reply"],
        defaultValue: "post",
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      postedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
