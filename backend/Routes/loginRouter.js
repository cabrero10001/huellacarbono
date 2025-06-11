import express from "express";
import { Login } from "../controllers/loginController.js";

const router = express.Router();

router.post('/Login', Login);

export default router;