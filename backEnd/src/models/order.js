import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model("Order", orderSchema)

export default Order;