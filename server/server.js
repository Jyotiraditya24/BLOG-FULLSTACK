import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";
import cloudRoute from "./routes/cloud.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/cloud", cloudRoute);

//MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3001, () => {
    console.log("connected to port 3001");
  });
});

//CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

export default cloudinary;
