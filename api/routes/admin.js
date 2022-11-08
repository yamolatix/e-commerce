const { Router } = require("express");
const admin = Router();
const { checkRoleAuth } = require("../middlewares/roleAuth")
const { checkAuth } = require("../middlewares/auth")
const { newUserRole, showAllUsers, deleteUser } = require("../controllers/admin")

admin.put("/edit/:id", checkAuth, checkRoleAuth(['admin']), newUserRole);

admin.get("/users", checkAuth, checkRoleAuth(['admin']), showAllUsers);

admin.delete("/:id", checkAuth, checkRoleAuth(['admin']), deleteUser);

module.exports = admin;