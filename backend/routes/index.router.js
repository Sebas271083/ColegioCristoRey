import { Router } from "express";
import { index } from "../controllers/index.js";


const router = Router()

router.get('/', index)

export default router