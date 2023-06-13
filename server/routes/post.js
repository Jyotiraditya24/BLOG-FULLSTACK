import { Router } from "express";
import { createPost, getAllPost } from "../controllers/post.js";

const router = Router();

router.post("/create", createPost);
router.get("/getAllPost", getAllPost);

export default router;
