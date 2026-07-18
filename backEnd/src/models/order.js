import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    user:{
        type:String
    },
    products:{
        type: Array
    },
    finalPrice:{
        type: Number
    }

});

const Orders = mongoose.model("Order", orderSchema)

export default Orders;