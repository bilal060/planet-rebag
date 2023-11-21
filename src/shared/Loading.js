import React from "react";
import "../assets/css/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="d-flex justify-content-center align-content-center">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
