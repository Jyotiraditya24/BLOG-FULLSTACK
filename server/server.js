import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/auth", authRoute);

//MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3001, () => {
    console.log("connected to port 3001");
  });
});
