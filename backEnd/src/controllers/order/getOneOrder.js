import Order from "../../models/index"
export default async function getOneOrder(id){
    return await Order.findById(id)
}