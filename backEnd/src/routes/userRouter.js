import {router} from "express";
import {createUser, deleteUser, deleteUser, getAllUsers, getOneUser, updateUser} from "../controllers/user/index";

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
})

user.post("/", async (req, res) => {
    const newUser = await createUser(req.body)
    res.send(newUser).status(200)
})

user.delete("/:id", async (req, res) => {
    const deleteUser = await deleteUser (req.params.id)
    res.send(deleteUser).status(200)
})

export default user