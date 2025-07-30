import React from "react";

const Home = () => {
  return (
    <main className="bg-dark text-light section-dark">
      {/* ===== Carousel Section ===== */}
      <div
        id="homeCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="./assets/Logo.png"
              className="d-block w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              alt="School Building"
            />
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="./assets/Logo1.png"
              className="d-block w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              alt="Classroom Activity"
            />
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="./assets/Logo.png"
              className="d-block w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              alt="School Event"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <div className="container px-4 py-5 text-center  rounded shadow " style={{backgroundColor: '#0c1a24'}} >
        <h1 className="display-5 fw-bold kanoo-heading mb-4" style={{color: '#00f7ff', textShadow: '0 0 10px #00f7ff55'}}>
          𝑺𝒉𝒓𝒊 𝑻𝒓𝒊𝒍𝒐𝒌 𝑩𝒉𝒂𝒓𝒕𝒊 𝑷𝒖𝒃𝒍𝒊𝒄 𝑺𝒓. 𝑺𝒆𝒄. 𝑺𝒄𝒉𝒐𝒐𝒍 (𝑱𝒂𝒏𝒅𝒂𝒘𝒂𝒍𝒊)
        </h1>
        <div className="col-lg-6 mx-auto ">
          <p className="lead mb-4 text-secondary ">
            A place where discipline meets excellence — nurturing future leaders
            since its foundation.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
            <a href="/contact" className="btn btn-primary btn-lg px-4 gap-3">
              Contact Now
            </a>
            <a href="/about" className="btn btn-outline-light btn-lg px-4">
              Learn More
            </a>
          </div>
        </div>
      </div>

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
                <div className="kanoo-icon">
                  <img
                    src="./assets/Home/faculty.png"
                    alt=" Experienced faculty"
                  />
                  <h5> 🎓 Experienced Faculty</h5>
                </div>
                <p>Guiding students with dedication and expertise.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="kanoo-card">
                <div className="kanoo-icon">
                  <img src="./assets/Home/class.png" alt="Smart Classrooms" />
                  <h5>🖥️ Smart Classrooms</h5>
                </div>

                <p>Interactive learning with audio-visual aids.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="kanoo-card">
                <div className="kanoo-icon">
                  <img src="./assets/Home/result.jpeg" alt="Top Results" />
                  <h5>🏆 Top Results</h5>
                </div>

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
