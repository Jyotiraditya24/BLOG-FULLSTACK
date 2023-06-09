import Navbar from "./components/Navbar";
import "./App.css";
import Blogs from "./components/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Blogs />} />
          <Route path="/login" element={<div>Login</div>}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
