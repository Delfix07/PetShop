import { Router } from "express";
import {createUser, deleteUser, getAllUsers, getOneUser, updateUser} from "../controllers/user/index.js";

const user = Router()

user.get("/", async (req, res) => {
    const users = await getAllUsers()
    res.send(users)
})

user.get("/:id", async (req, res) => {
    const user = await getOneUser(req.params.id)
    res.send(user)
})

user.put("/:id", async (req, res) => {
    try {
        const updatedUser = await updateUser(
            req.params.id,
            req.body
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }
        res.status(400).json({
            message: "Error updating user",
            error: error.message
        })
    }
})

user.post("/", async (req, res) => {
    try {
        const newUser = await createUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email already registered"
            })
        }
        res.status(400).json({
            message: "Error creating user",
            error: error.message
        })
    }
})

user.delete("/:id", async (req, res) => {
    const deletedUser = await deleteUser (req.params.id)
    res.status(200).send(deletedUser)
})

//Try, Catch?? ver tema de manejos de erores.

export default user