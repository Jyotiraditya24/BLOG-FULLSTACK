import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const previewFiles = (file) => {
    const reader = new FileReader(); //reads any type of file and converts it into a path url
    reader.readAsDataURL(file); // converting to image base64 url
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  useEffect(() => {
    console.log(image); //image base64 url
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await fetch("http://localhost:3001/post/create", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         image: image,
       }),
     });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-y-10 max-w-[50%] items-center justify-center mx-auto mt-5"
      >
        <label htmlFor="fileInput">Upload your photo here</label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => {
            const file1 = e.target.files[0];
            setFile(file1);
            previewFiles(file1);
          }}
          required
          accept="image/png, image/jpg, image/jpeg"
        />
        <button className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
          Submit
        </button>
      </form>
      <img src={image} alt="" />
    </div>
  );
};

export default ImageUpload;
