import React from "react";

const resultData = [
  {
    title: "5th Class Result",
    description:
      "Check the Rajasthan Board 5th class result through Shala Darpan official site. Enter your roll number to view marks.",
    btnText: "View Result",
    link: "https://rajshaladarpan.rajasthan.gov.in/Class5th_8thExam/Home/SuppResultClassVth_VIIIth.aspx",
  },
  {
    title: "8th Class Result",
    description:
      "Access your 8th class marksheet and grades from Shala Darpan portal using your roll number.",
    btnText: "View Result",
    link: "https://rajshaladarpan.rajasthan.gov.in/Class5th_8thExam/Home/Result.aspx",
  },
  {
    title: "10th Class Result",
    description:
      "View your 10th class Rajasthan Board result. Enter your roll number to get your official result.",
    btnText: "View Result",
    link: "https://rajeduboard.rajasthan.gov.in/RESULT2025/SEV/Roll_Input.htm",
  },
  {
    title: "12th Class Result",
    description:
      "Check your RBSE 12th class result stream-wise (Arts/Science/Commerce) on the official site.",
    btnText: "View Result",
    link: "https://rajeduboard.rajasthan.gov.in/RESULT2025/ARTS/Roll_Input.htm",
  },
];

const ResultPage = () => {
  return (
    <div className="container my-5 result-section">
      <h2 className="text-center mb-5 kanoo-heading fw-bold">📊 Board Results</h2>
      <div className="row g-4">
        {resultData.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="result-card bg-dark text-light p-4 rounded-4 shadow">
              <h4 className="text-info fw-bold">{item.title}</h4>
              <p className="text-muted">{item.description}</p>
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
