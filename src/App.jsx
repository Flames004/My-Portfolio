import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BackgroundDoodles from "./components/BackgroundDoodles";

const App = () => {
  return (
    <div className="font-mono bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Router>
        <BackgroundDoodles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
