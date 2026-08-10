import { Products } from "../../models/index.js";
export default async function getProductsBySeller(sellerId){
    return await Products.find({ seller: sellerId })
}