const { Router } = require("express");
const user = Router();
const { checkRoleAuth } = require("../middlewares/roleAuth")
const { editUser } = require("../controllers/user")

user.put("/edit/:id", checkRoleAuth(['user']), editUser);

module.exports = user;