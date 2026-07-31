import { Router } from "express";
import {createProduct, deleteProduct, editProduct, getAllProducts, getOneProduct } from "../controllers/product/index.js";


const product = Router()

product.get("/", async (req, res) => {
    const products = await getAllProducts()
    res.send(products) 
})

product.get("/:id", async (req, res) =>{
    const product = await getOneProduct(req.params.id)
    res.send(product)
})

product.put("/:id", async (req,res) =>{
    const product = await editProduct (req.params.id, req.body)
    res.sendStatus(200)
})

product.post("/", async (req, res) =>{
    const newProduct = await createProduct(req.body)
    res.status(200).send(newProduct)
})

product.delete("/:id", async (req, res) =>{
    const deletedProduct = await deleteProduct(req.params.id)
    res.status(200).send(deletedProduct)
})

export default product