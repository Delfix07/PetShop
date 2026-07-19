import { Category } from "../../models/index";
export default async function getOneCategory(id){
    return await Category.findById(id)
}