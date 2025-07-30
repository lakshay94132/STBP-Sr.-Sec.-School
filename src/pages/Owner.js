import React from "react";

const Owner = () => {
  return (
    <section className="owner-wrapper py-5">
      <div className="container">
        <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
          {/* LEFT – CONTENT */}
          <div className="col-lg-6 text-light fade-in-left">
            <h2 className="owner-heading mb-3">Founder & Visionary</h2>
            <h4 className="fw-bold owner-name">Mr. Balram Limba</h4>
            <p className="owner-title">Principal & Owner</p>
            <p className="owner-text">
              Shri Trilok Bharti Public Sr. Sec. School was founded by Mr. <strong>Balram Limba</strong> with a vision to bring excellence in education to the heart of Jandawali (Hanumangarh). His commitment to values, discipline, and student empowerment has shaped thousands of lives.
            </p>
            <p className="owner-text">
              A visionary and a lifelong educator, Mr. Limba continues to inspire through his focus on holistic education, moral integrity, and innovation in teaching practices.
            </p>
            <p className="owner-contact"><strong className="text-neon">📍 Location:</strong> Jandawali, Hanumangarh, Rajasthan</p>
            <p className="owner-contact"><strong className="text-neon">📞 Contact:</strong> +91 99291-42063 | +91 79769-86063</p>
            <p className="owner-contact"><strong className="text-neon">✉️ Email:</strong> balramlimba365@gmail.com</p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center fade-in-right">
            <div className="owner-img-box">
              <img
                src="./assets/Owner/Owner.jpg"
                alt="Mr. Balram Limba"
                className="img-fluid rounded owner-img"
              />
              <p className="owner-quote">
                "Education is not a business, it's a mission to build a better tomorrow."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
