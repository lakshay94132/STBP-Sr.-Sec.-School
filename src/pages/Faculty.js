import React from 'react';

const FacultyStaff = () => {
  const teachers = [
    { name: "Mr. Rajesh Kumar", subject: "Mathematics", image: "/images/rajesh.jpg" },
    { name: "Mrs. Suman Verma", subject: "Science", image: "/images/suman.jpg" },
    { name: "Mr. Arvind Singh", subject: "English", image: "/images/arvind.jpg" },
    { name: "Ms. Priya Yadav", subject: "Social Studies", image: "/images/priya.jpg" },
    { name: "Mr. Sunil Sharma", subject: "Computer Science", image: "/images/sunil.jpg" },
    { name: "Mrs. Neeta Gupta", subject: "Hindi", image: "/images/neeta.jpg" },
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
            <p className="text-muted">Principal</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="kanoo-card">
            <img src="/images/viceprincipal.jpg" className="img-fluid rounded mb-3" alt="Vice Principal" />
            <h4 className="text-neon">Ms. Ritu Sharma</h4>
            <p className="text-muted">Vice Principal</p>
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
              <p className="text-muted">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyStaff;
