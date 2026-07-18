import {Products} from "../../models/index.js";
export default async function getOneProduct(id){
    return await Products.findById(id)
}