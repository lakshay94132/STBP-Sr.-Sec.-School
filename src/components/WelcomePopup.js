import React, { useEffect, useState } from "react";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 15000); // Auto-hide after 15 sec
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className="popup-container">
          <h2>👋 Welcome to</h2>
          <h1>Shri Trilok Bharti Public Sr. Sec. School</h1>
          <p className="tagline">
            “Empowering Rural Dreams with Quality Education”
          </p>
          <p>
            Thank you for reaching out to our school. We are committed to
            nurturing young minds with moral values, modern skills, and
            academic excellence.
          </p>
          <p>
            From smart classrooms to cultural development, we provide holistic
            education for a better future.
          </p>

          <button className="popup-ok-btn" onClick={handleClose}>
            OK, Let's Explore
          </button>
        </div>
      </div>
    )
  );
};

export default WelcomePopup;
