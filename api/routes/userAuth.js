const { Router } = require("express");
const userAuth = Router();
const { register, login } = require("../controllers/userAuth")

// Ruta para que un usuario se registre.
userAuth.post("/register", register);

//Ruta para que un usuario se loguee.
userAuth.post("/login", login);

module.exports = userAuth;