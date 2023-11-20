"use strict";

import { DataTypes, Sequelize } from "sequelize";
// import fs from "fs";
import path from "path";
import config from "../config/config.mjs";

// const basename = path.basename(__filename);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
  }
);

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  User: (await import("./user")).default(sequelize, DataTypes),
  Post: (await import("./post")).default(sequelize, DataTypes),
  Media: (await import("./media")).default(sequelize, DataTypes),
  Like: (await import("./like")).default(sequelize, DataTypes),
  Follow: (await import("./follow")).default(sequelize, DataTypes),
};

export default db;
