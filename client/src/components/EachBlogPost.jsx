const EachBlogPost = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start">
      <img
        src="../../public/img1.jpeg"
        alt="image"
        className="w-[80%] md:w-[50%] px-2"
      ></img>
      <div className="flex flex-col basis-1/2 justify-start items-center gap-2">
        <h1 className="font-bold text-3xl">Your PhotoGraph</h1>
        <p className="font-light px-10">
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
