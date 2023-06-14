import "./App.css";
import Blogs from "./components/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import { UserContextProvider } from "./context/UserContext";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Blogs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
