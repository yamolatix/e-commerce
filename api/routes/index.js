const { Router } = require("express");
const router = Router();

const userAuthRoutes = require("./userAuth")

router.use("/auth/user", userAuthRoutes);

module.exports = router;