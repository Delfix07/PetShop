import {Order} from "../../models/index.js"
export default async function cancellOrder(id){
    return await Order.findByIdAndDelete(id)
}