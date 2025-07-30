// src/components/Footer.jsx
import React from "react";

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
                <a href="/" className="text-light text-decoration-none">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  📘 About
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="text-light text-decoration-none"
                >
                  🎓 Academics
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-light text-decoration-none">
                  🖼️ Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  📞 Contact Us
                </a>
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

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-top border-light mt-4" />
        Creted By:{" "}
        <strong>
          {" "}
          <a href="/lakshay.html" className="text-neon">
            Lakshay Limba
          </a>{" "}
        </strong>
        <p className="text-center mb-0 small">
          &copy; 2025 Shri Trilok Bharti Public Sr. Sec. School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
