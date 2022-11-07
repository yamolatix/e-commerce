const S = require("sequelize");
const db = require("../db");

class Product extends S.Model { }

Product.init({
    name: {
        type: S.STRING,
        allowNull: false
    },
    price: {
        type: S.DECIMAL,
        defaultValue: 0
    },
    stock: {
        type: S.INTEGER,
        defaultValue: 1
    },
    rating: {
        type: S.INTEGER,
        defaultValue: 0
    },
    brand: {
        type: S.STRING
    },
    cat_one: {
        type: S.STRING
    },
    cat_two: {
        type: S.STRING
    },
    description: {
        type: S.TEXT
    },
    img_one: {
        type: S.STRING,
        allowNull: false
    },
    img_two: {
        type: S.STRING
    },
    img_three: {
        type: S.STRING
    },
}, { timestamps: false, sequelize: db, modelName: 'products' });

module.exports = Product;