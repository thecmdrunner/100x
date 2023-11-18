"use strict";

import UserModel from "./user";
import { Model } from "sequelize-typescript";
const FollowModel = (sequelize: any, DataTypes: any): any => {
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
    },
    {
      sequelize,
      modelName: "Follow",
    }
  );
  return Follow;
};
export default FollowModel;
