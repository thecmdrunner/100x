"use strict";

import UserModel from "./user";
import { Model, Sequelize, type DataTypes as _DataTypes } from "sequelize";
const FollowModel = (
  sequelize: Sequelize,
  DataTypes: typeof _DataTypes
): any => {
  class Follow extends Model {}
  Follow.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      followerId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: UserModel(sequelize, DataTypes),
          key: "id",
        },
      },
      followingId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: UserModel(sequelize, DataTypes),
          key: "id",
        },
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
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
    },
    {
      sequelize,
      modelName: "Follows",
    }
  );
  return Follow;
};
export default FollowModel;
