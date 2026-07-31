import { Category } from "../../models/index.js";
export default async function deleteCategory(id){
    return await Category.findByIdAndDelete(id)
}