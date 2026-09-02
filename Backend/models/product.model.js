const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true,
        trim: true
    },
    description: {
        type: "String",
        required: true,
    },
    image: {
        type: String
    },
    price : {
        type : String,
        required : true
    },
    category : {
        type : String
    }
}, {timestamps : true});

module.exports = mongoose.model("product", ProductSchema)