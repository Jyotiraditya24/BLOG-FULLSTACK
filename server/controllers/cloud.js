import cloudinary from "../server.js";

export const getCloudImg = async (req, res) => {
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
  } catch (error) {}
};
