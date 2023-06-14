import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    console.log(userData);
  },[]);

  console.log("hello")

  return <div>hello</div>;
};

export default SinglePostPage;
