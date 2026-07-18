import {Products} from "../../models/index.js";
export default async function deleteProduct(id){
    return await Products.findByIdAndDelete(id)
}