const Category = require("./Category")
const Order = require("./Order")
const Product = require("./Product")
const Review = require("./Review")
const User = require("./User")

Product.belongsToMany(Category, { through: "product_categories", timestamps: false })

Order.belongsTo(Product)
Product.hasMany(Order)

Order.belongsTo(User)
User.hasMany(Order)

Review.belongsTo(User)
User.hasMany(Review)

Review.belongsTo(Product)
Product.hasMany(Review)

module.exports = { Category, Order, Product, Review, User }