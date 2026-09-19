const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        const token =
            req.cookies.token ||
            (authHeader ? authHeader.split(" ")[1] : null);

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, process.env.secret);

        const user = await userModel.findById(decode.id || decode._id);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        if (user.role !== "admin") {
            return res.status(404).json({ message: "Only admin can access this route" });
        }

        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error });
    }
}