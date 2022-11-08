const { Router } = require("express");
const admin = Router();
const { newUserRole } = require("../controllers/admin")

admin.put("/edit/:id", newUserRole);

module.exports = admin;