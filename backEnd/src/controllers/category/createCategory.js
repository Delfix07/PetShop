import { Category } from "../../models/index";

export default async function createCategory(newCategory){
    const categoryCreated = await Category.create(newCategory)
    return categoryCreated
}