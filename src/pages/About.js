import React from "react";

const About = () => {
  return (
    <div className="about-page text-light">

      {/* ===== 1. Introduction ===== */}
      <div className="container mb-5 fade-in">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img src="https://source.unsplash.com/600x400/?school,building" className="img-fluid rounded-4 shadow-lg" alt="School" />
          </div>
          <div className="col-md-6">
            <h2 className="text-info fw-bold mb-3">Welcome to Shri Trilok Bharti Public Sr. Sec. School</h2>
            <p>
              We are committed to nurturing young minds through holistic education, discipline, and values. Our school stands as a beacon of knowledge, innovation, and personal development.
            </p>
          </div>
        </div>
      </div>

      {/* ===== 2. Principal's Message ===== */}
      <div className="container mb-5 p-5 rounded-4 glowing-section fade-in">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img src="https://source.unsplash.com/600x400/?principal,man" className="img-fluid rounded-4 shadow" alt="Principal" />
          </div>
          <div className="col-md-6">
            <h3 className="text-success fw-bold">Message from the Principal</h3>
            <p className="mt-3">
              “At our school, we believe education is the most powerful tool for shaping a better tomorrow. With the support of our dedicated staff and curious students, we strive to build not just a school — but a future.”
              <br />
              <strong>— Balram Limba, Principal</strong>
            </p>
          </div>
        </div>
      </div>

      {/* ===== 3. Vision and Mission ===== */}
      <div className="container mb-5 fade-in">
        <h3 className="text-center text-info mb-4 fw-bold">Our Vision & Mission</h3>
        <div className="row text-center">
          <div className="col-md-6">
            <h5 className="text-success">Vision</h5>
            <p>To empower students with knowledge, values, and skills to become compassionate and successful individuals.</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-success">Mission</h5>
            <p>To deliver quality education, foster curiosity, and inspire a lifelong passion for learning in a safe and inclusive environment.</p>
          </div>
        </div>
      </div>

      {/* ===== 4. Why Choose Us ===== */}
      <div className="container mb-5 p-4 glowing-section rounded-4 fade-in">
        <h3 className="text-info mb-4 fw-bold">Why Choose Us?</h3>
        <ul className="custom-list">
          <li>Academic excellence with experienced faculty</li>
          <li>Smart classrooms and modern infrastructure</li>
          <li>Focus on moral values and discipline</li>
          <li>Safe and inclusive learning environment</li>
          <li>Sports, cultural and co-curricular activities</li>
        </ul>
      </div>

      {/* ===== 5. Affiliations ===== */}
      <div className="container mb-5 fade-in">
        <h3 className="text-success fw-bold">Affiliations</h3>
        <p>
          Shri Trilok Bharti Public Sr. Sec. School is affiliated to the <strong>RBSE</strong> board. We adhere to national education standards and policies, offering high-quality curriculum aligned with the latest guidelines.
        </p>
      </div>

      {/* ===== 6. History ===== */}
      <div className="container mb-5 fade-in">
        <h3 className="text-info fw-bold">Our History</h3>
        <p>
          Founded with a noble vision of quality education for all, our school has grown from humble beginnings to a respected institution in the region. Over the years, we’ve transformed the lives of thousands of students and families through our commitment to learning and values.
        </p>
      </div>
    </div>
  );
};

export default About;
