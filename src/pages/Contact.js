import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5 text-light section-dark">
      <h2 className="text-center mb-4 section-heading">
        Welcome to <span className="text-neon">MAA LICHHMA DEVI LIBRARY</span>,<br />
        please fill the form below to get in touch.
      </h2>

      <div className="row g-5 align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <div className="kanoo-card p-3">
            <img
              src="/images/library.png"
              alt="Library"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="col-md-6">
          <div className="kanoo-card p-4">
            <h4 className="text-neon mb-3">Er. DharamPal Limba</h4>
            <p><strong>📍 Address:</strong><br /> Near Ayurvedic Hospital, Ward No. 7, Jandawali, Hanumangarh (335512), Rajasthan</p>
            <p><strong>📞 Phone:</strong> +91 94134-31446</p>
            <p><strong>📧 Email:</strong> Dharampallimba@gmail.com</p>
            <p><strong>🕗 Opening Hours:</strong> 8:00 AM – 8:00 PM (Mon–Sun)</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="kanoo-card p-5">
            <h4 className="text-neon mb-4">📬 Contact Form</h4>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control form-control-lg bg-black text-success border-success" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control form-control-lg bg-black text-success border-success" placeholder="Contact Number" />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control form-control-lg bg-black text-success border-success" placeholder="Your Email" />
                </div>
                <div className="col-12">
                  <textarea className="form-control bg-black text-success border-success" rows="5" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-success btn-lg px-5 mt-2">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
