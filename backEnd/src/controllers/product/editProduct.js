import {Products} from "../../models/index.js";
export default async function editProduct(id, updatedData){
    return await Products.findByIdAndUpdate(id, updatedData, {new:true})
}