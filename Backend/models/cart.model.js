const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    productId : {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        default : 0
    }
});

module.exports = mongoose.model('cart', CartSchema);