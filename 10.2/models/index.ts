"use strict";

import { Sequelize } from "sequelize";
// import fs from "fs";
import path from "path";
import config from "../config/config.mjs";

const db: Record<string, any> = {};
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
    logging: false,
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
