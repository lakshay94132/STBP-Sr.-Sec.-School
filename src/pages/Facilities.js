import React from "react";

const facilities = [
  
  
  {
    title: "Boys Common Room",
    image: "./assets/Facilities/Boys.jpg",
    description: "Charging ports for mobile devices and laptops.",
  },
  {
    title: "Girls Common Room",
    image: "./assets/Facilities/Girls.jpg",
    description: "A private space for girls to relax and refresh.",
  },
  {
    title: "Newspaper Access",
    image: "./assets/Facilities/paper.jpg",
    description: "Latest newspapers available for reading daily.",
  },
  {
    title: "CCTV Surveillance",
    image: "./assets/Facilities/cctv.png",
    description: "24x7 monitoring for enhanced security.",
  },
  {
    title: "Library Facility",
    image: "./assets/Facilities/Library.jpg",
    description: "A vast collection of books and resources for study.",
  },
  {
    title: "Smart Classroom",
    image: "https://via.placeholder.com/150",
    description: "Interactive learning with digital aids.",
  },
  {
    title: "Comfortable Seating Chairs",
    image: "./assets/Facilities/chair.jpeg",
    description: "Ergonomic seating for long study hours.",
  },
  {
    title: "Parking",
    image: "https://via.placeholder.com/150",
    description: "Secure parking space for students and staff.",
  },
  {
    title: "Air-Conditioned Hall",
    image: "./assets/Facilities/AC.jpg",
    description: "Cool and comfortable large hall for events.",
  },
  {
    title: "Book Issue Facility",
    image: "./assets/Facilities/stationary.png",
    description: "Borrow books easily from our collection.",
  },
  {
    title: "Free Wi-Fi",
    image: "./assets/Facilities/wifi.png",
    description: "High-speed internet access for all students and staff.",
  },
  {
    title: "Water Cooler",
    image: "./assets/Facilities/WaterCooler.jpg",
    description: "Clean, chilled water available at all times.",
  },
  {
    title: "Computer System for Study",
    image: "./assets/Facilities/computer.jpeg",
    description: "Access to computers for research and learning.",
  },
  {
    title: "LED Lighting",
    image: "./assets/Facilities/LED.png",
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
    image: "./assets/Facilities/aid-box.jpeg",
    description: "Emergency medical aid for students and staff.",
  },
  {
    title: "Power Backup",
    image: "./assets/Facilities/backup.jpeg",
    description: "Uninterrupted electricity through backup power.",
  },
  {
    title: "RO Drinking Water",
    image: "./assets/Facilities/RO.jpeg",
    description: "Pure RO water for drinking.",
  },
  {
    title: "Notice Board",
    image: "./assets/Facilities/notice-board.jpeg",
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
    image: "./assets/Facilities/discussion.jpg",
    description: "Peaceful room dedicated to focused reading.",
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
    title: "Wheelchair Access",
    image: "./assets/Facilities/wheel-chair.jpeg",
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
