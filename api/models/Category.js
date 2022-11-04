
const S = require("sequelize");
const db = require("../db");

class Category extends S.Model { }

Category.init({
    category_name: {
        type: S.STRING,
    },
}, { timestamps: false, sequelize: db, modelName: 'categories' });

module.exports = Category;