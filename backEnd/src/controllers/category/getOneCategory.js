import { Category } from "../../models/index.js";
export default async function getOneCategory(id){
    return await Category.findById(id)
}