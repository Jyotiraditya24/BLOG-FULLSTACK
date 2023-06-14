import { Router } from "express";
import { createPost, getAllPost, getSinglePost } from "../controllers/post.js";

const router = Router();

router.post("/create", createPost);
router.get("/getAllPost", getAllPost);
router.get("/getSinglePost/:id", getSinglePost);

export default router;
