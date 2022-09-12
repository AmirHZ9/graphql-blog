import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthorPage from "./components/Author/AuthorPage";
import BlogPage from "./components/Blogs/BlogPage";
import Home from "./components/home/Home";
import Layout from "./components/Layouts/Index";
import RTL from "./components/shared/RTl";
import ScrollToTop from "./components/shared/ScrollToTop";
function App() {
  return (
    <RTL>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="author/:slug" element={<AuthorPage />} />
          <Route path="blog/:slug" element={<BlogPage />} />
        </Routes>
      </Layout>
    </RTL>
  );
}

export default App;
