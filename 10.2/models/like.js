"use strict";

import post from "./post";
import user from "./user";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      id: {
        type: DataTypes.BIGINT(15),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT(15),
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      postId: {
        type: DataTypes.BIGINT(15),
        allowNull: false,
        references: {
          model: post,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
