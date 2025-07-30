import React from "react";

const resultData = [
  {
    title: "5th Class Result",
    description:
      "Building strong academic foundations through curiosity and guided learning. Our young minds shine bright in their first milestone!",
    btnText: "View Result",
    link: "https://rajshaladarpan.rajasthan.gov.in/Class5th_8thExam/Home/SuppResultClassVth_VIIIth.aspx",
  },
  {
    title: "8th Class Result",
    description:
      "Consistency and growth define our middle school achievements. Students demonstrate remarkable progress and discipline.",
    btnText: "View Result",
    link: "https://rajshaladarpan.rajasthan.gov.in/Class5th_8thExam/Home/Result.aspx",
  },
  {
    title: "10th Class Result",
    description:
      "One of the most crucial academic stages, our students rise with confidence. A proud moment of performance and preparation for the future.",
    btnText: "View Result",
    link: "https://rajeduboard.rajasthan.gov.in/RESULT2025/SEV/Roll_Input.htm",
  },
  {
    title: "12th Class Result",
    description:
     "The final step before college and career, marked with outstanding success. Our students lead with determination, skill, and high board scores.",
    btnText: "View Result",
    link: "https://rajeduboard.rajasthan.gov.in/RESULT2025/ARTS/Roll_Input.htm",
  },
];

const ResultPage = () => {
  return (
    <div className="container my-5 result-section">
      <h2 className="text-center mb-5 kanoo-heading fw-bold text-neon">📊 Board Results</h2>
      <div className="row g-4">
        {resultData.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="result-card bg-dark text-light p-4 rounded-4 shadow">
              <h4 className="text-info fw-bold">{item.title}</h4>
              <p className="text-white">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm mt-2"
              >
                {item.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
