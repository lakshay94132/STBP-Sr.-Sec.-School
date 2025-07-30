import React from "react";

const Academics = () => {
  return (
    <div className="container py-5 text-light academics-page">
      <h1 className="text-center mb-5 section-title">Academics</h1>

      {/* Academic Structure with Dropdowns */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Academic Structure</h2>

        <div className="accordion" id="academicAccordion">
          {/* Dropdown 1 - Books */}
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="headingBooks">
              <button
                className="accordion-button collapsed bg-secondary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBooks"
                aria-expanded="false"
                aria-controls="collapseBooks"
              >
                📚 Academic Books Structure
              </button>
            </h2>
            <div
              id="collapseBooks"
              className="accordion-collapse collapse"
              aria-labelledby="headingBooks"
              data-bs-parent="#academicAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush custom-list">
                  <li className="list-group-item bg-dark text-light">
                    <strong>Nursery to UKG:</strong> हिन्दी, अंग्रेज़ी, गणित।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 1 to 5:</strong> हिन्दी, अंग्रेज़ी, गणित,
                    पर्यावरण, सामाजिक विज्ञान।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 6 to 8:</strong> हिन्दी, अंग्रेज़ी, गणित,
                    विज्ञान, सामाजिक विज्ञान, पंजाबी, संस्कृत, कंप्यूटर।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 9 to 10:</strong> हिन्दी, अंग्रेज़ी, गणित,
                    विज्ञान, सामाजिक विज्ञान, पंजाबी, संस्कृत, कंप्यूटर।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 11 to 12:</strong>
                    <br />
                    <u>Science:</u> भौतिक, रसायन, गणित/जीवविज्ञान, अंग्रेज़ी,
                    हिन्दी, कंप्यूटर।
                    <br />
                    <u>Arts:</u> हिन्दी, अंग्रेज़ी, इतिहास, भूगोल, पंजाबी,
                    राजनीति विज्ञान, गृह विज्ञान।
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dropdown 2 - Copies */}
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="headingCopies">
              <button
                className="accordion-button collapsed bg-secondary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCopies"
                aria-expanded="false"
                aria-controls="collapseCopies"
              >
                📒 Academic Copies Structure
              </button>
            </h2>
            <div
              id="collapseCopies"
              className="accordion-collapse collapse"
              aria-labelledby="headingCopies"
              data-bs-parent="#academicAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush custom-list">
                  <li className="list-group-item bg-dark text-light">
                    <strong>Nursery to UKG:</strong> चार लाइन कॉपी (हिन्दी,
                    अंग्रेज़ी), गणित कॉपी, ।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 1 to 5:</strong> हिन्दी, अंग्रेज़ी, गणित,
                    पर्यावरण, - सभी के लिए अलग कॉपी।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 6 to 8:</strong> प्रत्येक विषय के लिए अलग कॉपी
                    (हिन्दी, अंग्रेज़ी, गणित, संस्कृत, विज्ञान, SST, पंजाबी,
                    कंप्यूटर)।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 9 to 10:</strong> सभी विषयों के लिए अलग-अलग
                    कॉपी + प्रैक्टिकल कॉपियाँ।
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    <strong>Class 11 to 12:</strong> थ्योरी और प्रैक्टिकल
                    कॉपियाँ अलग-अलग (प्रत्येक विषय के लिए)।
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
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
              <li>Sanskrit</li>
              <li>Moral Education</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-info">Senior Secondary (11–12)</h5>
            <p>
              <strong>Science Stream:</strong> Physics, Chemistry, Mathematics,
              Biology, Hindi, English
            </p>
            <p>
              <strong>Arts Stream:</strong> History, Geography, Political
              Science, Home Science, Hindi, English, Punjabi
            </p>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="mb-5 section-box">
        <h2 className="section-subtitle">Faculty</h2>
        <p>
          Our highly qualified and passionate teachers work tirelessly to ensure
          each student reaches their maximum potential. Regular workshops and
          training sessions are held to keep them updated with the latest
          teaching methodologies.
        </p>
      </section>

      {/* Academic Highlights */}
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
        <p>
          <strong>📅 April – June:</strong> Session Begins, New Admissions,
          Orientation
        </p>
        <p>
          <strong>📅 July – August:</strong> First Unit Tests, Parent-Teacher
          Meet
        </p>
        <p>
          <strong>📅 September – October:</strong> Half-Yearly Exams, Cultural
          Events
        </p>
        <p>
          <strong>📅 December – January:</strong> Winter Break & Pre-Board
          Preparation
        </p>
        <p>
          <strong>📅 February – March:</strong> Final Exams & Farewell
        </p>
      </section>
    </div>
  );
};

export default Academics;
