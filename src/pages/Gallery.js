import React from "react";

const images = [
  { src: "/images/gallery1.jpg", alt: "Annual Function" },
  { src: "/images/gallery2.jpg", alt: "Sports Day" },
  { src: "/images/gallery3.jpg", alt: "Classroom Activity" },
  { src: "/images/gallery4.jpg", alt: "Science Exhibition" },
  { src: "/images/gallery5.jpg", alt: "Cultural Dance" },
  { src: "/images/gallery6.jpg", alt: "Art Competition" },
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
