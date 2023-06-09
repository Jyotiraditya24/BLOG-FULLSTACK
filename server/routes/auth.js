import { Router } from "express";
import { register } from "../controllers/auth.js";

const router = Router();

/* auth/register */
router.post("/register", register);

export default router;
