import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "antd-css-utilities/utility.min.css";
import Footer from "./layout/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";


const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="12, 163, 231"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
