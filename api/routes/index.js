const { Router } = require("express");
const router = Router();

const adminRoutes = require("./admin")
const userAuthRoutes = require("./userAuth")
const userRoutes = require("./user")
const productsRoutes = require("./products")

router.use("/auth/admin", adminRoutes);
router.use("/auth/user", userAuthRoutes);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);

module.exports = router;