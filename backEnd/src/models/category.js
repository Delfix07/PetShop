import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }
})

const Category = mongoose.model("Category", categorySchema)

export default Category;

//Accesories, Feeders, Toys...  