import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes/index";
import mongoose from "mongoose";

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.use("/", routes)
        app.listen(3000, () => {
            console.log("Servidor iniciado en http://localhost:3000");
        })
    }).catch((err) => {
        console.error("Error al conectar con MongoDB");
        console.error(err);
    })