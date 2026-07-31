import {Order} from "../../models/index.js"
export default async function createOrder(newOrder){
    const orderCreated = await Order.create(newOrder)
    return orderCreated 
}