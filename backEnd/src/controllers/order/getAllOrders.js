import Order from "../../models/index"
export default async function getAllOrders(){
    return await Order.find()
}