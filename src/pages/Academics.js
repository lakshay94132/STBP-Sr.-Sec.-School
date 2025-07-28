import React from "react";

const Academics = () => {
  return (
    <div className="container py-5 text-light academics-page">
      <h1 className="text-center mb-5 section-title">Academics</h1>

      {/* Academic Structure */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Academic Structure</h2>
        <ul className="list-group list-group-flush custom-list">
          <li className="list-group-item">Nursery to UKG</li>
          <li className="list-group-item">Class 1 to 5 – Primary</li>
          <li className="list-group-item">Class 6 to 8 – Upper Primary</li>
          <li className="list-group-item">Class 9 to 10 – Secondary</li>
          <li className="list-group-item">Class 11 to 12 – Senior Secondary (Science, Arts)</li>
        </ul>
      </section>

      {/* Subjects */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Subjects Offered</h2>
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-info">Primary to Secondary (1–10)</h5>
            <ul>
              <li>Hindi</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Computer</li>
              <li>Punjabi</li>
              <li>Moral Education</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-info">Senior Secondary (11–12)</h5>
            <p><strong>Science Stream:</strong> Physics, Chemistry, Mathematics, Biology, Computer Science</p>
            <p><strong>Arts Stream:</strong> History, Geography, Political Science, Hindi, English, Punjabi</p>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Laboratories</h2>
        <div className="row text-center">
          {["Physics", "Chemistry", "Biology", "Computer"].map((lab, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="lab-card">
                <img
                  src={`https://via.placeholder.com/200x150?text=${lab}+Lab`}
                  alt={`${lab} Lab`}
                  className="img-fluid rounded"
                />
                <p className="mt-2 text-info fw-semibold">{lab} Lab</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Faculty</h2>
        <p>
          Our highly qualified and passionate teachers work tirelessly to ensure each student reaches their maximum potential. Regular workshops and training sessions are held to keep them updated with the latest teaching methodologies.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Academic Highlights</h2>
        <ul>
          <li>💯 100% result in board examinations for the past 5 years</li>
          <li>🧠 Smart class-enabled classrooms</li>
          <li>📘 Remedial classes for weak students</li>
          <li>🏅 Scholarship programs for meritorious students</li>
        </ul>
      </section>

      {/* Academic Calendar */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Academic Calendar Snapshot</h2>
        <p><strong>📅 April – June:</strong> Session Begins, New Admissions, Orientation</p>
        <p><strong>📅 July – August:</strong> First Unit Tests, Parent-Teacher Meet</p>
        <p><strong>📅 September – October:</strong> Half-Yearly Exams, Cultural Events</p>
        <p><strong>📅 December – January:</strong> Winter Break & Pre-Board Preparation</p>
        <p><strong>📅 February – March:</strong> Final Exams & Farewell</p>
      </section>
    </div>
  );
};

export default Academics;
