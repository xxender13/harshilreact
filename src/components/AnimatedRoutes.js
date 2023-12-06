import React from 'react'
import { Switch } from 'react-router-dom';
import {  Routes, Route, useLocation} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience"; 
import Education from './components/Education';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { AnimatePresence } from 'framer-motion';

function  AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />    
      </Routes>
      </AnimatePresence>
  )
}

export default  AnimatedRoutes