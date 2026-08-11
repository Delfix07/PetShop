import { Order } from "../../models/index.js";

export default async function getOrdersByUser(userId) {
    return await Order.find({user: userId})
}