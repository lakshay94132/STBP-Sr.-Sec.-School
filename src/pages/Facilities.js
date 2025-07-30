import React from "react";

const facilities = [
  {
    title: "Free Wi-Fi",
    image: "https://via.placeholder.com/150",
    description: "High-speed internet access for all students and staff.",
  },
  {
    title: "Water Cooler",
    image: "https://via.placeholder.com/150",
    description: "Clean, chilled water available at all times.",
  },
  {
    title: "Parking",
    image: "https://via.placeholder.com/150",
    description: "Secure parking space for students and staff.",
  },
  {
    title: "Charging Points",
    image: "https://via.placeholder.com/150",
    description: "Charging ports for mobile devices and laptops.",
  },
  {
    title: "Newspaper Access",
    image: "https://via.placeholder.com/150",
    description: "Latest newspapers available for reading daily.",
  },
  {
    title: "CCTV Surveillance",
    image: "https://via.placeholder.com/150",
    description: "24x7 monitoring for enhanced security.",
  },
  {
    title: "Smart Classroom",
    image: "https://via.placeholder.com/150",
    description: "Interactive learning with digital aids.",
  },
  {
    title: "Comfortable Seating",
    image: "https://via.placeholder.com/150",
    description: "Ergonomic seating for long study hours.",
  },
  {
    title: "Air-Conditioned Hall",
    image: "https://via.placeholder.com/150",
    description: "Cool and comfortable large hall for events.",
  },
  {
    title: "Book Issue Facility",
    image: "https://via.placeholder.com/150",
    description: "Borrow books easily from our collection.",
  },
  {
    title: "Computer System for Study",
    image: "https://via.placeholder.com/150",
    description: "Access to computers for research and learning.",
  },
  {
    title: "LED Lighting",
    image: "https://via.placeholder.com/150",
    description: "Bright and energy-efficient LED lights.",
  },
  {
    title: "Separate Washroom",
    image: "https://via.placeholder.com/150",
    description: "Clean and separate washrooms for boys and girls.",
  },
  {
    title: "Fire Safety",
    image: "https://via.placeholder.com/150",
    description: "Fire extinguishers and safety protocols in place.",
  },
  {
    title: "First Aid Box",
    image: "https://via.placeholder.com/150",
    description: "Emergency medical aid for students and staff.",
  },
  {
    title: "Power Backup",
    image: "https://via.placeholder.com/150",
    description: "Uninterrupted electricity through backup power.",
  },
  {
    title: "RO Drinking Water",
    image: "https://via.placeholder.com/150",
    description: "Pure RO water for drinking.",
  },
  {
    title: "Notice Board",
    image: "https://via.placeholder.com/150",
    description: "Stay updated with notices and announcements.",
  },
  {
    title: "Career Guidance Cell",
    image: "https://via.placeholder.com/150",
    description: "Support for students' career planning.",
  },
  {
    title: "Digital Library Access",
    image: "https://via.placeholder.com/150",
    description: "Explore books and journals online.",
  },
  {
    title: "Reading Room",
    image: "https://via.placeholder.com/150",
    description: "Peaceful room dedicated to focused reading.",
  },
  {
    title: "Girls Common Room",
    image: "https://via.placeholder.com/150",
    description: "A private space for girls to relax and refresh.",
  },
  {
    title: "Staff Cabin",
    image: "https://via.placeholder.com/150",
    description: "Dedicated area for teachers and administration.",
  },
  {
    title: "Biometric Entry",
    image: "https://via.placeholder.com/150",
    description: "Secure entry using fingerprint scans.",
  },
  {
    title: "Seminar Room",
    image: "https://via.placeholder.com/150",
    description: "Hall equipped for talks, lectures and seminars.",
  },
  {
    title: "Projector Facility",
    image: "https://via.placeholder.com/150",
    description: "Projection systems for visual presentations.",
  },
  {
    title: "Language Lab",
    image: "https://via.placeholder.com/150",
    description: "Special lab for improving language skills.",
  },
  {
    title: "Wheelchair Access",
    image: "https://via.placeholder.com/150",
    description: "Facilities designed to support differently-abled.",
  },
];

const Facilities = () => {
  return (
    <div className="container my-5 facilities-section text-light">
      <h2 className="text-center mb-5 fw-bold kanoo-heading text-neon">
        Our Facilities
      </h2>
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
              <p className="text-white small">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
