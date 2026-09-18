const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const productModel = require("../models/product.model");
const imagekit = require("../config/imagekit");
const jwt = require("jsonwebtoken");

module.exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "All fields are required" });
        }
        const admin = await userModel.findOne({ email }).select("+password");

        if (!admin) {
            return res.status(404).json({
                message: "Invalid Email or Password"
            });
        }

        if (admin.role !== "admin") {
            return res.status(400).json({ message: "Admin not verified" });
        }

        const AdminExist = await bcrypt.compare(password, admin.password);
        if (!AdminExist) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        const token = jwt.sign({id : admin._id}, process.env.secret);
        res.cookie("token", token);

        res.status(200).json({ message: "Admin Login Successfully", admin, token });
    } catch (error) {
        res.status(401).json({ message : "Admin Login Error", error });
    }
}

module.exports.productCreate = async (req, res) => {
    try {
        const { title, description, category, price } = req.body;

        if (!title || !description || !category || !price) {
            return res.status(401).json({ message: "All fields are required" });
        }

        const uploadFile = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname
        })

        const product = await productModel.create({
            title,
            description,
            category,
            price,
            image: uploadFile.url
        });
        res.status(201).json({ message: "Product Created Successfully", product });
    } catch (error) {
        res.status(400).json({ message: "Product Create Error", error })
    }
}

module.exports.getProduct = async (req, res) => {
    const products = await productModel.find();
    res.status(200).json({ message: "All Products", products });
}

module.exports.getProductById = async (req, res)=>{
    try {
        const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message : "Invalid Product ID Format"});
    }
    const products = await productModel.findById(id);

    if(!products){
        return res.status(400).json({message : "Product Not Found!"})
    }
    res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

module.exports.logout = async (req, res)=>{
    req.clearCookie("token");
    res.status(200).json({message:"Logged Out Succesfully"});
}