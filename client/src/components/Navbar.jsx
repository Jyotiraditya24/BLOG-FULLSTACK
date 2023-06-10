import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4 my-0 mx-auto max-w-xl md:max-w-6xl mb-10">
      <Link to="/" className="no-underline font-bold">
        LOGO
      </Link>
      <nav className="flex flex-row justify-between items-center gap-10">
        <Link to="/login" className="no-underline">
          Login
        </Link>
        <Link to="/register" className="no-underline  ">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
