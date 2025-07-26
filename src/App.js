// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Faculty from "./pages/Faculty.js";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Owner from "./pages/Owner";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
