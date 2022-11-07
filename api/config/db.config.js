const { config } = require("dotenv");
config();

module.exports = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.PORT
}