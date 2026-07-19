import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    surname:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true,
        minLength: 7,
        maxLenght: 20
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    }  
});

const User = mongoose.model("Users", userSchema)

export default User;