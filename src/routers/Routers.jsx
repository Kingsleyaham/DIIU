import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Stories from "../pages/stories";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
