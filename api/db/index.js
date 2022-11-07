const Sequelize = require("sequelize");
const { database, host, dialect } = require("../config/db.config")

const db = new Sequelize(database, null, null, {
    host,
    dialect,
    logging: false
})

module.exports = db;