import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5 text-light section-dark">
      <h2 className="text-center mb-4 section-heading">
        Welcome to <span className="text-neon">Shri Trilok Bharti Public Sr. Sec. School</span>,<br />
        please fill the form below to get in touch.
      </h2>

      <div className="row g-5 align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <div className="principal p-3">
            <img
              src="./assets/Contact/principal.jpg"
              alt="Library"
              className="img-fluid rounded-4 shadow-lg principal-image"
              style={{
                maxHeight: "4000px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="col-md-6">
          <div className="kanoo-card p-4">
            <h4 className="text-neon mb-3">Mr. Balram Limba</h4>
            <p><strong className="text-neon mb-3">📍 Address:</strong><br /> Near Ayurvedic Hospital, Ward No. 6, Jandawali, Hanumangarh (335512), Rajasthan</p>
            <p className="mt-1"><strong className="text-neon mb-3">📞 Phone:</strong> <br/>
              +91 99291-42063<br />
              +91 79769-86063<br />
              +91 94132-30527
            </p>

            <p><strong className="text-neon mb-3">📧 Email:</strong> STBPSchool@gmail.com</p>
            <p><strong className="text-neon mb-3">🕗 Opening Hours:</strong> <br/>
            In Summers: 8:00 AM - 2:00 PM<br/>
            In Winters: 9:00 AM - 3:00 PM<br/>
            Sunday: Closed
            </p>
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
