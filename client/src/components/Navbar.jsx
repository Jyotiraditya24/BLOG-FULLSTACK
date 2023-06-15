import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const logout = () => {
    setUserInfo("");
    setRedirect(true);
  };
  console.log(userInfo.userName);

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <header className="flex flex-row justify-between items-center p-4 my-0 mx-auto max-w-xl md:max-w-6xl mb-10 bg-blue-500">
      <Link to="/" className="no-underline font-bold">
        LOGO
      </Link>
      <nav className="flex flex-row justify-between items-center gap-10">
        {userInfo.userName && (
          <div className="flex flex-row gap-x-5 items-center">
            <Link to="/create">Create New Post</Link>
            <a onClick={logout}>LogOut</a>
          </div>
        )}
        {!userInfo.userName && (
          <div className="flex flex-row gap-x-5 items-center">
            <Link to="/login" className="no-underline">
              Login
            </Link>
            <Link to="/register" className="no-underline">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
