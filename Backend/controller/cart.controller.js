const cartModel = require("../models/cart.model");

module.exports.cart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const userId = req.user;
        const cartProduct = await cartModel.findOne({ userId: userId, productId: productId });

        if (cartProduct) {
            cartProduct.quantity += quantity;
            await cartProduct.save();

            return res.status(200).json({ message: "Cart Updated Successfully" });
        } else {
            const cart = await cartModel.create({
                productId,
                quantity,
                userId: userId
            });
            res.status(200).json({ message: "Product Added Successfully", cart });
        }

    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong" });
    }
}

module.exports.getCartProduct = async (req, res) => {
    try {
        const userId = req.user;
        const cartProduct = await cartModel.find({ userId }).populate("productId");
        res.status(200).json({ cartProduct });
    } catch (error) {
        res.status(400).json({ error: "Failed to retrieve cart items" });
    }
}

module.exports.deleteItem = async (req, res) => {
    try {
        const prodId = req.params.prodId;
        const userId = req.user;
        const deleteProduct = await cartModel.findOneAndDelete({userId: userId, productId: prodId });
        if(!deleteProduct){
            return res.status(404).json({ message: "Product not found" });
        }
            return res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.log("Error deleting product from cart:", error);
        return res.status(400).json({ message: "Error", error })
    }
}