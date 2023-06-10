import { useEffect } from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [d, setD] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setD(data);
  };

  useEffect(() => {
    console.log(d);
  }, [d]);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center mb-10 font-bold text-4xl">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Username.."
            className="border border-black px-4 py-2 rounded-md"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            type="email"
            placeholder="Email.."
            className="border border-black px-4 py-2 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password.. "
            className="border border-black px-4 py-2 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="border border-black px-4 py-2 rounded-sm bg-blue-500 text-center hover:cursor-pointer hover:bg-blue-600 hover:scale-95 transition">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
