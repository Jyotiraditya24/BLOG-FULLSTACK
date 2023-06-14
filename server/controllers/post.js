import mongoose from "mongoose";
import postModel from "../model/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, summary, content, image, authorId, authorName } = req.body;
    const newPost = new postModel({
      title: title,
      summary: summary,
      content: content,
      image: image,
      authorId: authorId,
      authorName: authorName,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPost = async (req, res) => {
  try {
    const allPost = await postModel.find();
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await postModel.find({ authorId: id });

    if (posts.length === 0) {
      return res.status(404).json({ error: "No posts found for the author" });
    }

    res.json({ posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
