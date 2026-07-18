import {Products} from "../../models/index.js";
export default async function editProduct(){
    return await Products.findByIdAndUpdate(id, updateData, {new:true})
}