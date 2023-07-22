import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Spinner component that shows a countdown and a loading spinner before redirecting to a specified path
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3); // State variable to keep track of the countdown
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    // Use useEffect to set up a countdown and navigate to the specified path when the countdown reaches zero
    const interval = setInterval(() => {
      // Decrease the count by 1 every second
      setCount((prevValue) => --prevValue);
    }, 1000);

    // Check if the count has reached zero
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>

      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {/* Display the countdown message */}
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        {/* Loading spinner */}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
