import { Order } from "../../models/index.js";

export default async function updateOrder(id, updatedData) {
    return await Order.findByIdAndUpdate(
        id,
        updatedData,
        {
            new: true,
            runValidators: true
        }
    )
}