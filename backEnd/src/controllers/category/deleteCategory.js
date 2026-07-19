import { Category } from "../../models/index";
export default async function deleteCategory(id){
    return await Category.findByIdAndDelete(id)
}