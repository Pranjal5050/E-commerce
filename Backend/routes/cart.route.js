const express = require("express");
const router = express.Router();
const cartModel = require("../models/cart.model");
const authMiddleware = require("../middleware/user.middleware");
const cartController = require("../controller/cart.controller");

router.post("/", authMiddleware.userMiddleware, cartController.cart);

router.get("/getCartProduct", authMiddleware.userMiddleware, cartController.getCartProduct);

module.exports = router;