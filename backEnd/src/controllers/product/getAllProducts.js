import {Products} from "../../models/index.js";
export default async function getAllProducts(search) {
    if (!search) {
        return await Products.find();
    }
    return await Products.find({
        name: {
            $regex: search,
            $options: "i"
        }
    });

}