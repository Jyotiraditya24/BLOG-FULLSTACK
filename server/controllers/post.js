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
