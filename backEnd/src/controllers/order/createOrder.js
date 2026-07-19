import Order from "../../models/index"
export default async function createOrder(newOrder){
    const orderCreated = await Order.create(newOrder)
    return orderCreated 
}