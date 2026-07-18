import { Products } from "../../models";
export default async function createProduct(newProduct){
    const productCreated = await Products.create(newProduct)
    return productCreated
}