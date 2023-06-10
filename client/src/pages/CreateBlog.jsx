import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="flex flex-col gap-y-3">
      <input
        type="title"
        placeholder="Title"
        className="border border-black px-4 py-2 rounded-md"
        value={title}
      />
      <input
        type="summary"
        placeholder="Summary"
        className="border border-black px-4 py-2 rounded-md"
        value={summary}
      />
      <input type="file" />
      <ReactQuill value={content}/>
      <button className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
        Create Post
      </button>
    </form>
  );
};

export default CreateBlog;
