import postModel from "../model/Post.js";
import cloudinary from "../server.js";

export const createPost = async (req, res) => {
  let imageData;
  try {
    const { title, summary, content, image, authorId, authorName } = req.body;
    const newPost = new postModel({
      title: title,
      summary: summary,
      content: content,
      image: imageData,
      author: authorId,
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};

// cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

// before we upload anything to the library(cloudinary ) we need to set the preset
