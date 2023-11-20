"use strict";

import PostModel from "./post";
import { Model } from "sequelize";

const MediaModel = (sequelize: any, DataTypes: any): any => {
  class Media extends Model {}
  Media.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      index: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: PostModel(sequelize, DataTypes),
          key: "id",
        },
      },
      mediaUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["image", "video", "gif"],
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
      modelName: "Media",
    },
  );
  return Media;
};
export default MediaModel;
