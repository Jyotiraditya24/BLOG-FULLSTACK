const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto">
        <h1 className="text-center mb-10 font-bold text-4xl">Login</h1>
      <form>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Email.."
            className="border border-black px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Password.. "
            className="border border-black px-4 py-2 rounded-md"
          />
          <butto className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
            Login 
          </butto>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
