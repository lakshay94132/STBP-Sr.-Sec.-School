import React from "react";

const FacultyStaff = () => {
  const teachers = [
    {
      name: "Mr. Subhash Aitan",
      subject: "English, Sanskrit",
      image: "./assets/Faculty/blank.png",
      graduation: "Clerk",
    },
    {
      name: "Mr. Kuldeep Singh",
      subject: "Hindi, Social Science, Drawing",
      image: "./assets/Faculty/blank.png",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mr. Bheem sain",
      subject: "English, Punjabi",
      image: "./assets/Faculty/blank.png",
      graduation: "B.A. ",
    },
    {
      name: "Mr. Sohan Singh",
      subject: "Social Science, Mathematics,Geography",
      image: "./assets/Faculty/blank.png",
      graduation: "BSTC, M.A., B.ED ",
    },
    {
      name: "Mr. Tonu ",
      subject: "Computer Science",
      image: "./assets/Faculty/blank.png",
      graduation: "RS-CIT, Computer Operator ",
    },

    {
      name: "Mr. Narender Limba",
      subject: "Science, History",
      image: "./assets/Faculty/nerander.jpg",
      graduation: "M.A., B.ED ",
    },
    
    {
      name: "Mrs. Kanchan Verma",
      subject: "Punjabi, Home Science ",
      image: "./assets/Faculty/kanchan.jpg",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mrs. Shilpa Dhundhara",
      subject: "GK, Home Science",
      image: "./assets/Fac.jpg",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mrs. Manju Daal",
      subject: "Political Science, Geography",
      image: "./assets/Faculty/manju.jpg",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mrs. Manjeet kour",
      subject: "Hindi, Learning",
      image: "./assets/Faculty/blank.png",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mrs. Permeshwari  ",
      subject: "Punjabi, Hisstory",
      image: "./assets/Faculty/blank.png",
      graduation: "M.A., B.ED ",
    },
    {
      name: "Mrs. Gurpreet Kour",
      subject: "GK, Environmetal Study",
      image: "./assets/Faculty/blank.png",
      graduation: "M.A., B.ED ",
    },
  ];

  return (
    <div className="container py-5 section-dark">
      <h2 className="text-center mb-5 fw-bold section-heading">
        🧑‍💼 Faculty & Staff 🧑‍💼
      </h2>

      {/* Principal & Vice Principal Section */}
      <div className="row mb-5 text-center">
        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img
              src="./assets/Faculty/Owner.jpg"
              className="img-fluid rounded mb-3"
              alt="Principal"
            />
            <h4 className="text-neon">Mr. Balram Limba</h4>
            <p className="text-light">Principal</p>
            <p className="text-light">Mathematics, Science, Geography</p>
            <p className="text-light">B.Sc, M.A., B.ED, BP.ED</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img
              src="./assets/Faculty/blank.png"
              className="img-fluid rounded mb-3"
              alt="Vice Principal"
            />
            <h4 className="text-neon">Mr. Daleep Singh Limba</h4>
            <p className="text-light">Vice Principal</p>
            <p className="text-light">Mathematics, Hindi </p>
            <p className="text-light">
              M.A., B.ED (RT. GOVT. Retired lecturer ){" "}
            </p>
          </div>
        </div>
      </div>

      {/* Teacher Cards */}
      <div className="row">
        {teachers.map((teacher, index) => (
          <div className=" col-md-4 mb-4" key={index}>
            <div className="kanoo-card h-100 d-flex flex-column align-items-center">
              <div className="faculty-image-box">
                <div className="faculty-image-wrapper">
                  <img
                    src={teacher.image}
                    className=" faculty-image mx-auto mb-3"
                    alt={teacher.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
              <h5 className="text-neon">{teacher.name}</h5>
              <p className="text-light d-flex justify-content-center">
                {teacher.subject}
              </p>
              <p className="text-light d-flex justify-content-center">
                {teacher.graduation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyStaff;
