import { Router } from "express";
import {userRouter, productRouter, orderRouter, categoryRouter} from "../routes"
import cors from "cors"

const router = Router()

router.use(cors())

router.use("/users", userRouter) 
router.use("/products", productRouter)
router.use("/orders", orderRouter)
router.use("/categories", categoryRouter)

export default router