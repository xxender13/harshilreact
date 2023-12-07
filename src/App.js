import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from './components/Education';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a default route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>

      <SocialLinks />
    </Router>
  );
}

export default App;
