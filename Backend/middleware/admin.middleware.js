const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.authMiddleware = ((req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, process.env.secret);

        const user = userModel.findById(decode.id || decode._id);

        if (!user.role === "admin") {
            return res.status(404).json({ message: "Only admin can access this route" });
        }

        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error });
    }
})