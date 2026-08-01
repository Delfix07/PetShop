import { Router } from "express";
import {loginUser} from "../controllers/logIn/index.js";


const user = Router();

user.post("/", async (req, res) => {
    try{
        const {email, password} = req.body
        const loggedUser = await loginUser(email, password)
        if (!loggedUser) {
            return res.status(401).send("Credentials are incorrect")
        }
        return res.status(200).json(loggedUser)
    }catch (error){
    res.status(500).send("Internal server error")
}
})

export default user

