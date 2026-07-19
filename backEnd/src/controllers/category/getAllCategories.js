import { Category } from "../../models/index";
export default async function getAllCategories(){
    return await Category.find()
}