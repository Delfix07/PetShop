import { Router } from "express";
import {loginUser} from "../controllers/logIn/index.js";


const login = Router();

login.post("/", async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await loginUser(email)
        if (!user) {
            return res.status(404).json("User not found")
        }
        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }
        return res.status(200).json(
            {message: "Login successful", user})
    }catch (error){
    console.error(error);

    return res.status(500).json({
        message: "Internal server error"
    });
}
})

export default login

