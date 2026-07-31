import { Router } from "express";
import {cancellOrder, createOrder, getAllOrders, getOneOrder, updateOrder} from "../controllers/order/index.js";

const order = Router()

order.get("/", async (req, res) => {
    const orders = await getAllOrders()
    res.send(orders)
})

order.get("/:id", async (req,res) =>{
    const order = await getOneOrder(req.params.id)
    res.send(order)
})

order.put("/:id", async (req,res) =>{
    const order = await updateOrder(req.params.id, req.body)
    res.sendStatus(200)
})

order.post("/", async (req,res)=>{
    const newOrder = await createOrder (req.body)
    res.status(200).send(newOrder)
})

order.delete("/:id", async (req,res)=>{
    const deleteOrder = await cancellOrder (req.params.id)
    res.status(200).send(deleteOrder)
})

export default order