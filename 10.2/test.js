
const db = require("./models/index.js");
const test = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

test()