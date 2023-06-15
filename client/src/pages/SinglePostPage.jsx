import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import { format } from "date-fns";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SinglePostPage = () => {
  const [userData, setUserData] = useState();
  const { userInfo } = useContext(UserContext);
  const params = useParams();
  const { id } = params;

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

  console.log(userInfo.userName);

  return (
    <div>
      {userData &&
        userData.map((data) => (
          <div
            key={data._id}
            className="flex flex-col justify-center items-center gap-10"
          >
            <Image uploadedImage={data.image} />
            <h1 className="text-2xl">{data.title}</h1>
            <time className="font-extralight">
              {format(new Date(data.createdAt), "MMM d, yyyy HH:mm")}
            </time>
            <span>by {data.authorName}</span>
            {data.authorId === userInfo.userId && (
              <div>
                <Link to={`/edit/${data._id}`}>
                  <h1 className="rounded-lg px-4 py-2 text-white bg-blue-600">
                    Edit
                  </h1>
                </Link>
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        ))}
    </div>
  );
};

export default SinglePostPage;
