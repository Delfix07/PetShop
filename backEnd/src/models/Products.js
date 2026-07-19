import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    petType:{
        type: [String],
        required: true
    },
    stock:{
        type:Number,
        default: 0,
    },
    category:{
        type: String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    image:{
        type: String
    },
});

const Products = mongoose.model("Products", productSchema)

export default Products;