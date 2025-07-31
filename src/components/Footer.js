// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">About Us</h5>
            <p>
              Shri Trilok Bharti Public Sr. Sec. School is committed to
              excellence in education, values, and all-round development of
              every student.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  📘 About
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-light text-decoration-none"
                >
                  🎓 Academics
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-light text-decoration-none">
                  🖼️ Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  📞 Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>Jandawali, Hanumangarh,
              Rajasthan - 335512
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 9929142063{" "}
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>info@trilokschool.in
            </p>
            
          </div>
        </div>
        <hr className="border-top border-light mt-4" />
        Creted By:{" "}
        <strong>
          {" "}
          <Link to="/lakshay.html" className="text-neon">
            Lakshay Limba
          </Link>{" "}
        </strong>
        <p className="text-center mb-0 small">
          &copy; 2025 Shri Trilok Bharti Public Sr. Sec. School. All rights
          reserved. <br />  "Empowering students with knowledge, discipline, and
          values." Crafted with ❤️ in Hanumangarh | Powered by Modern Education
          & Digital Learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;
