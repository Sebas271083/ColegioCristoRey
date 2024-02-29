import { Router } from "express";
import { contacto, enviarFormulario } from "../controllers/contacto.js";

const router = Router()

router.get('/', contacto)
router.post('/procesar_formulario', enviarFormulario)

export default router