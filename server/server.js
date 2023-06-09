import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use(authRoute);

//MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3001, () => {
    console.log("connected to port 3001");
  });
});
