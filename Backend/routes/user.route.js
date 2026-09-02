const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");

router.post("/register", [
    body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname must be at least 3 characters"),
    body("email").isEmail().withMessage("Firstname must be at least 3 characters"),
    body("password").isLength({ min: 6 }).withMessage("Firstname must be at least 3 characters"),
], [userController.userRegister]);

router.post("/login", [
    body("email").isEmail().withMessage("Firstname must be at least 3 characters"),
    body("password").isLength({ min: 6 }).withMessage("Firstname must be at least 3 characters"),
], [userController.userLogin]);

router.get('/profile/:userId', userController.userProfile);

router.get("/logout", userController.Logout);

module.exports = router