import db from "./models";

const test = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    db.sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

test();
