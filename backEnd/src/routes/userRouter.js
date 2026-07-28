import { Router } from "express";
import {createUser, deleteUser, deleteUser, getAllUsers, getOneUser, updateUser} from "../controllers/user/index.js";

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
    const user = await updateUser(req.params.id, req.body)
    res.sendStatus(200)
})

user.post("/", async (req, res) => {
    const newUser = await createUser(req.body)
    res.send(newUser).status(200)
})

user.delete("/:id", async (req, res) => {
    const deletedUser = await deleteUser (req.params.id)
    res.send(deletedUser).status(200)
})

//Try, Catch?? ver tema de manejos de erores.

export default user