"use strict";

import { Model } from "sequelize-typescript";

const UserModel = (sequelize: any, DataTypes: any): any => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
      },
      emailVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      passwordHash: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(160),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      profilePicture: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      coverPicture: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

export default UserModel;
