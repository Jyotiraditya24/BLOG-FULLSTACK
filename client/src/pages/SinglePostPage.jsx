import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";

const SinglePostPage = () => {
  const [userData, setUserData] = useState();
  const params = useParams();
  const { id } = params;
  console.log(id);

  async function getData() {
    const response = await fetch(
      `http://localhost:3001/post/getSinglePost/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setUserData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      {userData &&
        userData.map((data) => (
          <div key={data._id}>
            <h1>{data.title}</h1>
            <h2>{data.summary}</h2>
            <h2>{data.authorName}</h2>
            <h2>{data.content}</h2>
            <h2>{data.createdAt}</h2>
            <Image uploadedImage={data.image}/>
          </div>
        ))}
    </div>
  );
};

export default SinglePostPage;
