const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
const db = require("./db/db");
db()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const cartRoute = require("./routes/cart.route");

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/cart", cartRoute);

module.exports = app;