import cloudinary from "../server.js";

export const createPost = async (req, res) => {
  try {
    const { image } = req.body;
    const uploadedImage = await cloudinary.uploader.upload(
      image,
      {
        upload_preset: "unsigned_upload",
        public_id: `BLOG_IMAGE`,
        allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
      },
      function (err, result) {
        if (err) {
          console.log(err);
        }
        res.status(201).json(result);
      }
    );
  } catch (error) {
    console.log(error);
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
