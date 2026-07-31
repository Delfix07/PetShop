import { Products } from "../../models/index.js";
export default async function createProduct(newProduct){
    const productCreated = await Products.create(newProduct)
    return productCreated
}