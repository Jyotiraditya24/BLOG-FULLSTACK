import express from "express";
import { getCloudImg } from "../controllers/cloud.js";

const router = express.Router();

router.post("/postImg", getCloudImg);

export default router;
