import { Router } from "express";
import { contacto } from "../controllers/contacto.js";

const router = Router()


router.get('/', contacto)



export default router