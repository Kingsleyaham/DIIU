import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi";
import Navbar from "./components/layout/navbar";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Stories from "./pages/Stories";
// import About from "./pages/About";
import Footer from "./components/layout/footer";
import NotFound from "./pages/NotFound";
import Loader from "./components/layout/loader";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Stories = lazy(() => import("./pages/Stories"));

function App() {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const checkActive = () => {
    const { pathname } = useLocation();
    if (pathname === "/contact") {
      return "contactPage";
    } else if (pathname === "/") {
      return "homePage";
    } else if (pathname === "/about") {
      return "about";
    } else if (pathname === "/stories") {
      return "stories";
    }
  };

  const handleInput = (e, value) => {
    if (value === "name") {
      setInputs({ ...inputs, name: e.target.value });
    } else if (value === "email") {
      setInputs({ ...inputs, email: e.target.value });
    }
    if (value === "message") {
      setInputs({ ...inputs, message: e.target.value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: false },
      }),
      message: Joi.string().min(10).required(),
    });

    const { error } = schema.validate(inputs);
    if (error) {
      toast.warn(error.message);
      setIsSending(false);
      return;
    } else {
      let templateParams = inputs;

      try {
        const res = await emailjs.send(
          import.meta.env.VITE_serviveId,
          import.meta.env.VITE_templateId,
          templateParams,
          import.meta.env.VITE_publicKey
        );
        setIsSending(false);
        setInputs({ name: "", email: "", message: "" });
        toast.success("Contacted Successfully!");
      } catch (err) {
        setIsSending(false);
        toast.error("An error occured");
      }
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar checkActive={checkActive} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <Contact
                handleFormSubmit={handleFormSubmit}
                handleInput={handleInput}
                inputs={inputs}
                sending={isSending}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
