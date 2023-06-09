const EachBlogPost = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center md:justify-start md:items-start">
      <img
        src="../../img1.jpeg"
        alt="image"
        className="w-[80%] md:w-[30%]"
      ></img>
      <div className="flex flex-col basis-1/2 justify-start items-center gap-2 md:gap-0 mx-auto md:items-start">
        <h1 className="font-bold text-3xl">Your PhotoGraph</h1>
        <div className="mb-1 mt-2">
          <a href="#" className="font-bold mr-2">
            Author
          </a>
          <time className="font-extralight">2023-01-06 16:45</time>
        </div>
        <p className="font-light text-2xl mt-2 px-4 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quidem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
          officia amet explicabo magni neque temporibus voluptates nesciunt
          ratione recusandae? Magni?
        </p>
      </div>
    </div>
  );
};

export default EachBlogPost;
