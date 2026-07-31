import { Router } from "express";
import {createCategory, deleteCategory, editCategory, getAllCategories, getOneCategory} from "../controllers/category/index.js";

const category = Router()

category.get("/", async (req, res) => {
    const categories = await getAllCategories()
    res.send(categories)
})

category.get("/:id", async (req,res) =>{
    const category = await getOneCategory(req.params.id)
    res.send(category)
})

category.put("/:id", async (req,res) =>{
    const category = await editCategory(req.params.id, req.body)
    res.sendStatus(200)
})

category.post("/", async (req,res)=>{
    const newCategory = await createCategory (req.body)
    res.status(200).send(newCategory)
})

category.delete("/:id", async (req,res)=>{
    const deletedCategory = await deleteCategory (req.params.id)
    res.status(200).send(deletedCategory)
})

export default category