import postModel from "../model/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, summary, content, image, authorId } = req.body;
    const newPost = new postModel({
      title: title,
      summary: summary,
      content: content,
      image: image,
      author: authorId,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error.message);
  }
};
