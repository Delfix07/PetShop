import { Router } from "express";
import {createCategory, deleteCategory, editCategory, getAllCategories, getOneCategory} from "../controllers/category/index.js";

const category = Router()

category.get("/", async (req, res) => {
    try {
        const categories = await getAllCategories()
        res.status(200).send(categories)
    } catch (error) {
        res.status(500).send({
            error: "Error getting categories"
        })
    }
})

category.get("/:id", async (req, res) => {
    try {
        const category = await getOneCategory(req.params.id)
        if (!category) {
            return res.status(404).send({
                error: "Category not found"
            })
        }
        res.status(200).send(category)
    } catch (error) {
        res.status(400).send({
            error: "Invalid category ID"
        })
    }
})

category.put("/:id", async (req, res) => {
    try {
        const category = await editCategory(req.params.id, req.body)
        res.status(200).send(category)
    } catch (error) {
        res.status(400).send({
            error: error.message
        })
    }
})

category.post("/", async (req, res) => {
    try {
        const newCategory = await createCategory(req.body)
        res.status(201).send(newCategory)
    } catch (error) {
        res.status(400).send({
            error: error.message
        })
    }
})

category.delete("/:id", async (req, res) => {
    try {
        const deletedCategory = await deleteCategory(req.params.id)
        if (!deletedCategory) {
            return res.status(404).send({
                error: "Category not found"
            })
        }
        res.status(200).send(deletedCategory)
    } catch (error) {
        res.status(400).send({
            error: "Invalid category ID"
        })
    }
})

export default category