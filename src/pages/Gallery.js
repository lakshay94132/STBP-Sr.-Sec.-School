import React from "react";

const images = [
  { src: "./assets/Gallary/Annual-Function.jpeg", alt: "Annual Function" },
  { src: "./assets/Gallary/Sports-Day.jpeg", alt: "Sports Day" },
  {
    src: "./assets/Gallary/Classroom-Activity.jpeg",
    alt: "Classroom Activity",
  },
  {
    src: "./assets/Gallary/Science-Exibhition.jpeg",
    alt: "Science Exhibition",
  },
  { src: "./assets/Gallary/Cultural-Dance.jpeg", alt: "Cultural Dance" },
  { src: "./assets/Gallary/Art-Competition.jpeg", alt: "Art Competition" },
  { src: "./assets/Gallary/Teachers-Day.jpeg", alt: "Teachers Day" },
  { src: "./assets/Gallary/Farewell-Party.jpeg", alt: "Farewell Party" },
  { src: "./assets/Gallary/Basant-Panchmi.jpeg", alt: "Basant Panchmi" },
];

const GalleryPage = () => {
  return (
    <div className="container my-5 gallery-section text-light">
      <h2 className="text-center mb-5 fw-bold text-info fade-in">
        🖼️ Our School Gallery 🖼️
      </h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card fade-in" key={index}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-caption">{img.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
