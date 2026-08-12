import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    petType: {
        type: [String],
        required: true,
        validate: {
            validator: function (value) {
                return value.length > 0
            },
            message: "At least one pet type is required"
        }
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
})

const Products = mongoose.model("Products", productSchema)

export default Products;