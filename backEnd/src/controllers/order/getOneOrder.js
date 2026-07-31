import {Order} from "../../models/index.js"
export default async function getOneOrder(id){
    return await Order.findById(id)
}