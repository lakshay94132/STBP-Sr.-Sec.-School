import React from 'react';

const FacultyStaff = () => {
  const teachers = [
    { name: "Mr. Subhash Aitan", subject: "English", image: "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Kuldeep Sandhu", subject: "Hindi, Mathematics", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Bheem Singh", subject: "Social science", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Sohan Singh", subject: "Environment study", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Tonu ", subject: "Computer Science", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mrs. Manjeet kour", subject: "Hindi", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Subhash Aitan", subject: "Mathematics", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Kuldeep Sandhu", subject: "Science", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Bheem Singh", subject: "English", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mr. Sohan Singh", subject: "Social Studies", image:  "./assets/Faculty/Testing.jpg"},
    { name: "Mr. Tonu ", subject: "Computer Science", image:  "./assets/Faculty/Testing.jpg" },
    { name: "Mrs. Manjeet kour", subject: "Hindi", image:  "./assets/Faculty/Testing.jpg" },
  ];

  return (
    <div className="container py-5 section-dark">
      <h2 className="text-center mb-5 fw-bold section-heading">Faculty & Staff</h2>

      {/* Principal & Vice Principal Section */}
      <div className="row mb-5 text-center">
        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img src="./assets/Faculty/Owner.jpg" className="img-fluid rounded mb-3" alt="Principal" />
            <h4 className="text-neon">Mr. Balram Limba</h4>
            <p className="text-light">Principal</p>
            <p className="text-light">Mathematics, Science, HomeScience</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img src="./assets/Faculty/Owner.jpg" className="img-fluid rounded mb-3" alt="Vice Principal" />
            <h4 className="text-neon">Mr. Daleep Singh Limba</h4>
            <p className="text-light">Vice Principal</p>
            <p className="text-light">Mathematics, Hindi letrature</p>
          </div>
        </div>
      </div>

      {/* Teacher Cards */}
      <div className="row">
        {teachers.map((teacher, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="kanoo-card h-100 d-flex flex-column align-items-center">
              <img
                src={teacher.image}
                className="card-img-top mx-auto mb-3"
                alt={teacher.name}
                style={{ height: "200px", objectFit: "cover", borderRadius: "10px" }}
              />
              <h5 className="text-neon">{teacher.name}</h5>
              <p className="text-light d-flex justify-content-center">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyStaff;
