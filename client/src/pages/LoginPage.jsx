import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [d, setD] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      setRedirect(true);
      setD(data);
    }
  };

  useEffect(() => {
    console.log(d);
    localStorage.setItem("userName", d?.userName);
    localStorage.setItem("token", d?.token);
    localStorage.setItem("email", d?.email);
  }, [d]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center mb-10 font-bold text-4xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Email.."
            className="border border-black px-4 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password.. "
            className="border border-black px-4 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
