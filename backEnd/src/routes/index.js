import { Router } from "express";
import cors from "cors"

import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"
import orderRouter from "./orderRouter.js" 
import categoryRouter from "./categoryRouter.js"
import loginRouter from "./loginRouter.js";

const router = Router()

router.use(cors())

router.use("/user/register", userRouter) 
router.use("/products", productRouter)
router.use("/orders", orderRouter)
router.use("/categories", categoryRouter)
router.use("/login", loginRouter) 

export default router