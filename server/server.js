import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";
import cookieParser from "cookie-parser";
import cloudinary from "./cloudinary/index.js";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/auth", authRoute);
app.use("/post", postRoute);

//MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3001, () => {
    console.log("connected to port 3001");
  });
});
