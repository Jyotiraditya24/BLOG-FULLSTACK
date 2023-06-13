import { useState } from "react";
import { useEffect } from "react";
import EachBlogPost from "./EachBlogPost";

const Blogs = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getAllPost = async () => {
      const response = await fetch("http://localhost:3001/post/getAllPost", {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data);
    };
    getAllPost();
    console.log(posts);
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-y-10 max-w-xl md:max-w-6xl mx-auto">
      {posts && (
        <EachBlogPost></EachBlogPost>
      )}
      <EachBlogPost></EachBlogPost>
      <EachBlogPost></EachBlogPost>
    </section>
  );
};

export default Blogs;
