import { useState, useEffect } from "react";
import EachBlogPost from "./EachBlogPost";

const Blogs = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch("http://localhost:3001/post/getAllPost", {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data);
    };

    getAllPosts();
    console.log(posts);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-y-10 max-w-xl md:max-w-6xl mx-auto">
      {posts?.map((post) => (
        <EachBlogPost
          key={post._id}
          title={post.title}
          summary={post.summary}
          content={post.content}
          image={post.image}
          authorId={post.authorId}
          authorName={post.authorName}
          createdAt={post.createdAt}
        />
      ))}
    </section>
  );
};

export default Blogs;
