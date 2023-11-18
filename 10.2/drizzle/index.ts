// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'
// import * as schema from './schema'

const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
const schema = require("./schema");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

const client = postgres(connectionString);
const db = drizzle(client, {
  schema,
});

// db.query.users.findFirst({
//     where: (u, {}) =>  u.id === 123
// })

module.exports = {
  db,
};
