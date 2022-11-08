const { Router } = require("express");
const user = Router();
const { editUser } = require("../controllers/user")

user.put("/:id/edit", editUser);

module.exports = user;