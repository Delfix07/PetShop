import { Router } from "express";
import {getUser} from "../controllers/logIn/index.js";


const login = Router();

login.post("/", async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await getUser(email)
        if (!user) {
            return res.status(404).json("User not found")
        }
        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }catch (error){
    console.error(error);

    return res.status(500).json({
        message: "Internal server error"
    });
}
})

export default login

