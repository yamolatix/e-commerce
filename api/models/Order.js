
const S = require("sequelize");
const db = require("../db");

class Order extends S.Model { }

Order.init({
    date: {
        type: S.DATE,
    },
    status: {
        type: S.STRING,
        defaultValue: "pending"
    },
    total: {
        type: S.INTEGER
    }
}, { timestamps: false, sequelize: db, modelName: 'orders' });

module.exports = Order;