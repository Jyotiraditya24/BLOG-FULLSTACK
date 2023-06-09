const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4 my-0 mx-auto max-w-xl md:max-w-6xl mb-10">
      <a href="#" className="no-underline font-bold">
        LOGO
      </a>
      <nav className="flex flex-row justify-between items-center gap-10">
        <a href="" className="no-underline">
          Login
        </a>
        <a href="" className="no-underline  ">
          Register
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
