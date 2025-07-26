// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4 text-primary fw-bold">Shri Trilok Bharti Public Sr. Sec. School</h1>
        <p className="lead text-secondary">Empowering students with knowledge and values.</p>
        <a className="btn btn-primary btn-lg mt-3" href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
