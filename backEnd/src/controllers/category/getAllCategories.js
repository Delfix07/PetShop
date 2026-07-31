import { Category } from "../../models/index.js";
export default async function getAllCategories(){
    return await Category.find()
}