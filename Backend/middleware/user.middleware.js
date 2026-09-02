const jwt = require("jsonwebtoken");

module.exports.userMiddleware = (req, res, next) => {
    try {
        const authHeader = req.cookies.token || req.headers.authorization;
        if (!authHeader) {
            return res.status(400).json({ message: "Token not Provided" });
        }

        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader

        const decoded = jwt.verify(token, process.env.secret);

        req.user = decoded.id || decoded._id;

        next();
    } catch (error) {
        res.status(400).json({ error });

        return res.status(400).json({
            error: {
                name: error.name,
                message: error.message
            }
        });
    }
}