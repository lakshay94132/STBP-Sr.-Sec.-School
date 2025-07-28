import React from "react";

const Home = () => {
  return (
    <main className="bg-dark text-light py-5 section-dark">
      <div className="container px-4 py-5 text-center section-dark">
        <h1 className="display-5 fw-bold text-white">
          Shri Trilok Bharti Public Sr. Sec. School
        </h1>
        <div className="col-lg-6 mx-auto section-dark">
          <p className="lead mb-4 text-secondary">
            A place where discipline meets excellence — nurturing future leaders
            since its foundation.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center section-dark">
            <a href="/contact" className="btn btn-primary btn-lg px-4 gap-3">
              Contact Now
            </a>
            <a href="/about" className="btn btn-outline-light btn-lg px-4">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      {/* ===== Kanoo-Inspired Features Section ===== */}
      <section className="kanoo-features-section py-5 text-light">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold text-neon">Why Choose Us</h2>
          <p className="mb-5 text-muted">
            We blend tradition with technology for 21st-century learning.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="kanoo-card">
                <div className="kanoo-icon">🎓</div>
                <h5>Experienced Faculty</h5>
                <p>Guiding students with dedication and expertise.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="kanoo-card">
                <div className="kanoo-icon">🖥️</div>
                <h5>Smart Classrooms</h5>
                <p>Interactive learning with audio-visual aids.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="kanoo-card">
                <div className="kanoo-icon">🏆</div>
                <h5>Top Results</h5>
                <p>Consistently achieving 100% in board results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
