import React from "react";

const Owner = () => {
  return (
    <div className="container my-5 owner-section text-light">
      <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
        {/* LEFT SIDE – OWNER DETAILS */}
        <div className="col-lg-6">
          <h2 className="text-info fw-bold mb-3 kanoo-heading">
            Founder & Visionary
          </h2>
          <h4 className="fw-bold text-light">Mr. Balram Limba</h4>
          <p className="fst-italic text-warning">Principal & Owner</p>
          <p className="fs-5 text-light">
            Shri Trilok Bharti Public Sr. Sec. School was founded by Mr.{" "}
            <strong className="text-neon">Balram Limba</strong> with a vision to make quality
            education accessible in rural areas like Jandawali (Hanumangarh,
            Rajasthan). His dedication, discipline, and determination have
            shaped thousands of students who are now shining in various fields.
          </p>
          <p className="fs-5 text-light">
            With decades of experience in educational leadership, Mr. Limba
            believes in holistic development, moral education, and
            technology-integrated learning. Under his guidance, the school has
            grown from a humble beginning to a reputed institution in the
            region.
          </p>
          <p className="fs-5 mb-1">
            <strong className="text-neon">📍 Location:</strong> Jandawali, Hanumangarh, Rajasthan
          </p>
          <p className="fs-5 mb-1">
            <strong className="text-neon">📞 Contact:</strong> +91 99291-42063 | +91 79769-86063
          </p>
          <p className="fs-5">
            <strong className="text-neon">✉️ Email:</strong> balramlimba365@gmail.com
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="col-lg-6 text-center">
          <img
            src="./assets/Owner/Owner.jpg"
            alt="Mr. Balram Limba - Owner"
            className="img-fluid rounded glowing-img shadow-lg Owner-image"
            style={{
              maxHeight: "450px",
              objectFit: "cover",
              border: "2px solid #0dcaf0",
            }}
          />
          <p className="mt-3 text-secondary fst-italic">
            "Education is not a business, it's a mission to build a better
            tomorrow."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
