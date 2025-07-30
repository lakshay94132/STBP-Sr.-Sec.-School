import React from "react";

const images = [
  { src: "./assets/Gallary/Annual-Function.jpeg", alt: "Annual Function" },
  { src: "./assets/Gallary/Sports-Day.jpeg", alt: "Sports Day" },
  { src: "./assets/Gallary/Classroom-Activity.jpeg", alt: "Classroom Activity" },
  { src: "./assets/Gallary/Science-Exibhition.jpeg", alt: "Science Exhibition" },
  { src: "./assets/Gallary/Cultural-Dance.jpeg", alt: "Cultural Dance" },
  { src: "./assets/Gallary/Art-Competition.jpeg", alt: "Art Competition" },
  { src: "./assets/Gallary/Teachers-Day.jpeg", alt: "Teachers Day" },
  { src: "./assets/Gallary/Farewell-Party.jpeg", alt: "Farewell Party" },
  { src: "./assets/Gallary/Basant-Panchmi.jpeg", alt: "Basant Panchmi" },
];

const GalleryPage = () => {
  return (
    <div className="container my-5 gallery-section text-light">
      <h2 className="text-center mb-5 fw-bold text-info fade-in">Our School Gallery</h2>
      <div className="row g-4">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 fade-in">
            <div className="card shadow-lg border-0 bg-dark glowing-card">
              <img
                src={img.src}
                alt={img.alt}
                className="card-img-top rounded-top"
                style={{ height: "250px", objectFit: "cover", borderBottom: "2px solid #0ff" }}
              />
              <div className="card-body text-center">
                <p className="card-text text-light">{img.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
