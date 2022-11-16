import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Hero from "./components/section/Hero";
import Contact from "./components/section/Contact";
import NotFound from "./components/layout/notFound";
import Stories from "./components/section/Stories";
import "./App.css";

function App() {
  const checkActive = () => {
    const { pathname } = useLocation();
    if (pathname === "/contact") {
      return "contactPage";
    } else if (pathname === "/") {
      return "homePage";
    } else if (pathname.includes("/about")) {
      return "about";
    } else if (pathname === "/stories") {
      return "stories";
    }
  };

  return (
    <div className="App">
      <Navbar checkActive={checkActive}/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={Hero} />
        <Route path="/" element={Hero} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
