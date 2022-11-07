const fake_api = require("./fake_api.json");
const { Product } = require("../models");
const db = require("./index");

db.sync({ force: true })
    .then(() => Product.bulkCreate(fake_api))
    .then(() => console.log("Seedeado"))