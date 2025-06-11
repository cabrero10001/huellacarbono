import express from "express";
import { Registro } from "../controllers/registroController.js";

const router = express.Router();

router.post('/Registro', Registro);

export default router;