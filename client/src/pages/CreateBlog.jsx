import { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "../components/Image";
import { UserContext } from "../context/UserContext";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageBase64Url, setImageBase64Url] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [files, setFiles] = useState("");
  const { userInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/cloud/postImg", {
        method: "POST",
        body: JSON.stringify({
          image: imageBase64Url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //we will get public_id from here
      const data = await response.json();
      console.log("this is data1", data);
      setUploadedImage(data.public_id);

      const response2 = await fetch("http://localhost:3001/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          summary: summary,
          content: content,
          image: uploadedImage,
          author: userInfo.userId,
        }),
      });

      const data2 = await response2.json();
      console.log("this is data2", data2);
    } catch (error) {
      console.log(error.message);
    }
  };

  const previewFile = (uploadfile) => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadfile);
    reader.onloadend = () => {
      setImageBase64Url(reader.result);
    };
  };

  return (
    <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
      <input
        type="title"
        placeholder="Title"
        className="border border-black px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        className="border border-black px-4 py-2 rounded-md"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => {
          const uploadfile = e.target.files[0];
          setFiles(uploadfile);
          previewFile(uploadfile);
        }}
        required
        accept="image/png, image/jpg, image/jpeg"
      />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
        Create Post
      </button>
      <Image uploadedImage={uploadedImage} />
    </form>
  );
};

export default CreateBlog;
