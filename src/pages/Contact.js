import React, { useState, useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    parentName: "",
    studentClass: "",
    address: "",
    purpose: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, contact, email } = formData;

    if (!name || !contact || !email) {
      alert("❗ All required fields must be filled.");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(contact)) {
      alert("❗ Please enter a valid 10-digit Indian mobile number.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("❗ Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    alert("✅ Thank you! Your message has been submitted.");
    console.log(formData);

    setFormData({
      name: "",
      contact: "",
      email: "",
      parentName: "",
      studentClass: "",
      address: "",
      purpose: "",
      message: ""
    });
  };

  return (
    <div className="contactus-container container-fluid py-5 section-dark text-light">
      <div className="container">
        <h2 className="text-center mb-5 display-6 fw-bold text-glow">
          Welcome to <span className="text-neon">Shri Trilok Bharti Public Sr. Sec. School</span><br />
          <small className="fs-5">Please fill the form below to get in touch</small>
        </h2>

        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-6 text-center">
            <img
              src="./assets/Contact/principal.jpg"
              alt="Principal"
              className="img-fluid rounded-4 shadow principal-image"
              style={{ maxHeight: "480px", objectFit: "cover", border: "4px solid #0ef" }}
            />
          </div>

          <div className="col-lg-6">
            <div className="contact-card p-4 rounded-4 shadow-lg glass-box">
              <h4 className="text-neon fw-bold mb-2">Mr. Balram Limba</h4>
              <p><strong>📍 Address:</strong> Near Ayurvedic Hospital, Ward No. 6, Jandawali, Hanumangarh (335512), Rajasthan</p>
              <p><strong>📞 Phone:</strong><br /> +91 99291-42063<br /> +91 79769-86063<br /> +91 94132-30527</p>
              <p><strong>📧 Email:</strong> STBPSchool@gmail.com</p>
              <p><strong>🕗 Timings:</strong><br />
                Summer: 8:00 AM – 2:00 PM<br />
                Winter: 9:00 AM – 3:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="contact-card p-5 rounded-4 shadow-lg glass-box">
          <h4 className="text-neon mb-4">📬 Contact Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control form-control-lg input-glass" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="form-control form-control-lg input-glass" placeholder="Contact Number" required />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg input-glass" placeholder="Your Email" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="form-control form-control-lg input-glass" placeholder="Parent Name" />
              </div>
              <div className="col-md-6">
                <select name="studentClass" value={formData.studentClass} onChange={handleChange} className="form-control form-control-lg input-glass">
                  <option value="">Select Student Class</option>
                  {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map((cls, i) => (
                    <option key={i}>{cls}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <select name="purpose" value={formData.purpose} onChange={handleChange} className="form-control form-control-lg input-glass">
                  <option value="">Purpose of Enquiry</option>
                  <option>Admission</option>
                  <option>Fee Structure</option>
                  <option>Transfer Certificate (TC)</option>
                  <option>Job/Faculty Opportunity</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-12">
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control form-control-lg input-glass" placeholder="Your Address" />
              </div>
              <div className="col-12">
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control input-glass" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-neon btn-lg px-5 mt-2">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
