import React from "react";

const facilities = [
  {
    title: "Free Wi-Fi",
    image: "https://via.placeholder.com/150",
    description: "High-speed internet access for research, notes, and online study.",
  },
  {
    title: "Water Cooler",
    image: "https://via.placeholder.com/150",
    description: "Chilled and clean drinking water available anytime.",
  },
  {
    title: "Parking",
    image: "https://via.placeholder.com/150",
    description: "Two-wheeler and bicycle parking with CCTV coverage.",
  },
  {
    title: "Charging Points",
    image: "https://via.placeholder.com/150",
    description: "Multiple points for plugging laptops and phones.",
  },
  {
    title: "Newspaper Access",
    image: "https://via.placeholder.com/150",
    description: "Daily newspapers available to stay updated with current affairs.",
  },
  {
    title: "CCTV Surveillance",
    image: "https://via.placeholder.com/150",
    description: "24/7 monitoring of the premises for student safety.",
  },
  {
    title: "Comfortable Seating",
    image: "https://via.placeholder.com/150",
    description: "Modern, comfortable chairs and desks for focused study.",
  },
  {
    title: "Smart Classroom",
    image: "https://via.placeholder.com/150",
    description: "Interactive smart boards for digital learning sessions.",
  },
];

const Facilities = () => {
  return (
    <div className="container my-5 facilities-section text-light">
      <h2 className="text-center mb-5 fw-bold kanoo-heading">Our Facilities</h2>
      <div className="row g-4">
        {facilities.map((facility, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="facility-card p-3 h-100 text-center rounded-4">
              <img
                src={facility.image}
                alt={facility.title}
                className="img-fluid mb-3 rounded glow-img"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <h5 className="text-info">{facility.title}</h5>
              <p className="text-muted small">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
