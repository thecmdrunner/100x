import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.DB_HOST ||
  !process.env.DB_USERNAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error(
    "Please set all DB environment variables in .env file!!!!!!!!!!!!!!!!!",
  );
}

/** @type {Required<Pick<import("sequelize").Options, 'username' | 'password' | 'database' | 'dialect' | 'host'>>} */
const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
};

export default config;
