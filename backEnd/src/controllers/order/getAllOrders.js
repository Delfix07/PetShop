import {Order} from "../../models/index.js"
export default async function getAllOrders(){
    return await Order.find()
}