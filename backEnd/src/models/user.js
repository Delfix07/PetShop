import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 0
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "seller"],
        default: "user"
    }
})
const User = mongoose.model("Users", userSchema)
export default User;