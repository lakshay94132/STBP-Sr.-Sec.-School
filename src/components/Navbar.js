import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glowing-nav px-4 ">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand fw-bold glowing-brand" to="/">
                  <img src="./assets/Logo1.png" alt="LOGO" />

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold">
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/faculty">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/facilities">Facilities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/owner">Owner</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/Academics">Academics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/Result">Result</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
