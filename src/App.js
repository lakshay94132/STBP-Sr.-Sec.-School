// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePopup from "./components/WelcomePopup";

import About from "./pages/About";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty.js";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Owner from "./pages/Owner";
import Academics from "./pages/Academics";
import Result from "./pages/Result";
import Gallery from "./pages/Gallery";

import "./App.css";

function App() {
  return (
    <Router>
      <WelcomePopup />
      <Header />
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
