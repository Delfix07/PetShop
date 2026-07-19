import Order from "../../models/index"
export default async function cancellOrder(id){
    return await Order.findByIdAndDelete(id)
}