import { Router } from "express";
import { login, register } from "../controllers/auth.js";

const router = Router();

/* auth/register */
router.post("/register", register);
router.post("/login", login);


export default router;
