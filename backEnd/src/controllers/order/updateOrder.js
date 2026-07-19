import Order from "../../models/index"
export default async function updateOrder(id, updatedData){
    return await Order.findByIdAndUpdate(id, updatedData, {new:true})
}