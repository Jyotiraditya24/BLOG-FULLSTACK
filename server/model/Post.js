import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    image: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Post", postSchema);

export default postModel;
