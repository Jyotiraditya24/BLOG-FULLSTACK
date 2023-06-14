import Image from "./Image";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const EachBlogPost = ({
  title,
  summary,
  content,
  image,
  authorId,
  authorName,
  createdAt,
  postId,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center md:justify-start md:items-start">
      <Link to={`/post/${postId}`}>
        <Image
          uploadedImage={image}
          className="w-[80%] md:w-[30%]"
          alt="image"
        />
      </Link>
      <div className="flex flex-col basis-1/2 justify-start items-center gap-2 md:gap-0 mx-auto md:items-start">
        <Link to={`/post/${postId}`}>
          <h1 className="font-bold text-3xl">{title}</h1>
        </Link>
        <div className="mb-1 mt-2">
          <a href="#" className="font-bold mr-2">
            {authorName}
          </a>
          <time className="font-extralight">
            {format(new Date(createdAt), "MMM d, yyyy HH:mm")}
          </time>
        </div>
        <p className="font-light text-2xl mt-2 px-4 md:px-0">{summary}</p>
      </div>
    </div>
  );
};

export default EachBlogPost;
