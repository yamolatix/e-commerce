const { Router } = require("express");
const products = Router();
const { checkRoleAuth } = require("../middlewares/roleAuth")
const { showAllProducts, individualProduct, addProduct, editProduct, deleteUser } = require("../controllers/products")

// Ruta para que un usuario se registre.
products.get("/", showAllProducts);

products.get("/:id", individualProduct);

products.post("/add", checkRoleAuth(['admin']), addProduct);

products.put("/edit/:id", checkRoleAuth(['admin']), editProduct);

products.delete("/:id", checkRoleAuth(['admin']), deleteUser);

module.exports = products;