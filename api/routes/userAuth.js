const { Router } = require("express");
const userAuth = Router();
const userAuthController = require("../controllers/userAuth")

// Ruta para que un usuario se registre.
userAuth.post("/register", userAuthController.register);

//Ruta para que un usuario se loguee.
userAuth.post("/login", userAuthController.login);

// Ruta para que un usuario se desloguee.
userAuth.post("/logout", userAuthController.logout);

module.exports = userAuth;