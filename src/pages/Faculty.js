import React from 'react';

const FacultyStaff = () => {
  const teachers = [
    { name: "Mr. Subhash Aitan", subject: "English", image: "/images/rajesh.jpg" },
    { name: "Mr. Kuldeep Sandhu", subject: "Hindi, Mathematics", image: "/images/suman.jpg" },
    { name: "Mr. Bheem Singh", subject: "Social science", image: "/images/arvind.jpg" },
    { name: "Mr. Sohan Singh", subject: "Environment study", image: "/images/priya.jpg" },
    { name: "Mr. Tonu ", subject: "Computer Science", image: "/images/sunil.jpg" },
    { name: "Mrs. Manjeet kour", subject: "Hindi", image: "/images/neeta.jpg" },
    { name: "Mr. Subhash Aitan", subject: "Mathematics", image: "/images/rajesh.jpg" },
    { name: "Mr. Kuldeep Sandhu", subject: "Science", image: "/images/suman.jpg" },
    { name: "Mr. Bheem Singh", subject: "English", image: "/images/arvind.jpg" },
    { name: "Mr. Sohan Singh", subject: "Social Studies", image: "/images/priya.jpg" },
    { name: "Mr. Tonu ", subject: "Computer Science", image: "/images/sunil.jpg" },
    { name: "Mrs. Manjeet kour", subject: "Hindi", image: "/images/neeta.jpg" },
  ];

  return (
    <div className="container py-5 section-dark">
      <h2 className="text-center mb-5 fw-bold section-heading">Faculty & Staff</h2>

      {/* Principal & Vice Principal Section */}
      <div className="row mb-5 text-center">
        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img src="/images/principal.jpg" className="img-fluid rounded mb-3" alt="Principal" />
            <h4 className="text-neon">Mr. Balram Limba</h4>
            <p className="text-light">Principal</p>
            <p className="text-light">Mathematics, Science, HomeScience</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img src="/images/viceprincipal.jpg" className="img-fluid rounded mb-3" alt="Vice Principal" />
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
            <div className="kanoo-card h-100">
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
