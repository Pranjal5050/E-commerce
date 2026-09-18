const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const productModel = require("../models/product.model");

module.exports.userRegister = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }
    try {
        const { fullname, email, password, role } = req.body;
        if (!fullname.firstname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const ExistUser = await userModel.findOne({ email });
        if (ExistUser) {
            return res.status(200).json({ message: "User Already Exist" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname
            },
            email,
            role,
            password: hashPassword
        });
        const token = jwt.sign({ id: user._id }, process.env.secret);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        res.status(201).json({
            user,
            token
        })
    } catch (error) {
        res.status(401).json({ error });
    }
}

module.exports.userLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(401).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: "Email or Password Incorrect" })
        }
        const user = await userModel.findOne({ email }).select("+password")
        if (!user) {
            return res.status(400).json({ message: "Email or Password Incorrect" });
        }
        const PasswordExist = await bcrypt.compare(password, user.password);
        if (!PasswordExist) {
            return res.status(401).json({ message: "Email or Password Incorrect" });
        }
        const token = jwt.sign({ id: user._id }, process.env.secret);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        res.status(200).json({
            user,
            token
        })
    } catch (error) {
        res.status(401).json({ error });
    }
}

module.exports.userProfile = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.Logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json("Loggedout successfully");
}

module.exports.randomProducts = async (req, res) => {
    try {
        const findProducts = await productModel.aggregate([{ $sample: { size: 5 } }]);
        res.status(200).json({
            message: "Product find successfully",
            products: findProducts
        });
    } catch (error) {
        res.status(404).json({ message: "Error:-", error });
    }
}