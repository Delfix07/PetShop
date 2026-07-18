import {Products} from "../../models/index.js";
export default async function getAllProducts(){
    return await Products.find()
}