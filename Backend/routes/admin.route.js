const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");
const upload = require("../middleware/multer.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const { body } = require("express-validator");

router.post("/login", adminController.adminLogin);

router.post("/createProduct", adminMiddleware.authMiddleware, upload.single('image'), adminController.productCreate);

router.get("/getProducts", adminController.getProduct);

router.get(`/getProductById/:id`, adminController.getProductById);

module.exports = router;