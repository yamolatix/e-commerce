const fake_api = require("./fake_api.json");
const { Product } = require("../models");
const db = require("./db");

db.sync({ force: true })
    .then(() => Product.bulkCreate(fake_api))
    .then(() => console.log("Seedeado"))