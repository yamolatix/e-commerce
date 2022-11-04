 
const S = require("sequelize");
const db = require("../db");

class Review extends S.Model { }

Review.init({
    rating: {
        type: S.INTEGER,
    },
    description: {
        type: S.STRING,
    }
}, { timestamps: false, sequelize: db, modelName: 'reviews' });

module.exports = Review;