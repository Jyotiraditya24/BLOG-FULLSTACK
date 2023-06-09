import EachBlogPost from "./EachBlogPost";

const Blogs = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-10 max-w-xl md:max-w-6xl mx-auto">
      <EachBlogPost></EachBlogPost>
      <EachBlogPost></EachBlogPost>
    </section>
  );
};

export default Blogs;
