import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    classApplied: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ आपका फॉर्म सफलतापूर्वक सबमिट हो गया है।");
    console.log(formData);
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="text-center text-neon mb-4">📝 Admission Form 📝</h2>
      <form
        action="https://formspree.io/f/xzzvadkj"
        method="POST"
        className="bg-dark p-4 rounded shadow"
      >
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Student Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            className="form-control"
            placeholder="Father's Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mother's Name</label>
          <input
            type="text"
            name="fatherName"
            className="form-control"
            placeholder="Mother's Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Admission Class</label>
          <select
            name="classApplied"
            className="form-select"
            required
            onChange={handleChange}
          >
            <option value="">Choose Class</option>
            {[
              "नर्सरी",
              "LKG",
              "UKG",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11 (Science)",
              "11 (Arts)",
              "12 (Science)",
              "12 (Arts)",
            ].map((cls, i) => (
              <option key={i}>{cls}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Conatact Number"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full address</label>
          <textarea
            name="address"
            className="form-control"
            rows="3"
            placeholder="Enter your Address"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success px-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
