import dotenv from "dotenv";
import { Options } from "sequelize";
dotenv.config();

if (
  !process.env.DB_HOST ||
  !process.env.DB_USERNAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error(
    "Please set all DB environment variables in .env file!!!!!!!!!!!!!!!!!"
  );
}

export default {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
} satisfies Options;
