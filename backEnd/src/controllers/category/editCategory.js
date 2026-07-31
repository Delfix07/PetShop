import { Category } from "../../models/index.js";
export default async function editCategory(id, updatedData){
    return await Category.findByIdAndUpdate(id, updatedData, {new:true})
}