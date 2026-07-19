import { Category } from "../../models/index";
export default async function editCategory(id, updatedData){
    return await Category.findByIdAndUpdate(id, updatedData, {new:true})
}