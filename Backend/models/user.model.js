const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "Firstname must be 3 character"],
            trim: true
        },
        lastname: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);

