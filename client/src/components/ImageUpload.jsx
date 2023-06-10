import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const previewFiles = (file) => {
    const reader = new FileReader(); //reads any type of file and converts it into a path url
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(image);
    };
  };

  const handleSubmit = (e) => {};
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
            const file1 = e.target.files[0]
            setFile(file1)
            previewFiles(file1)
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
