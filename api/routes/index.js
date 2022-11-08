const { Router } = require("express");
const router = Router();

const userAuthRoutes = require("./userAuth")
const userRoutes = require("./user")
const adminRoutes = require("./admin")

router.use("/auth/user", userAuthRoutes);
router.use("/user", userRoutes);
router.use("/auth/admin", adminRoutes);

module.exports = router;