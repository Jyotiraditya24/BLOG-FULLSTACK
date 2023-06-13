import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    image: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    authorName: String,
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Post", postSchema);

export default postModel;
