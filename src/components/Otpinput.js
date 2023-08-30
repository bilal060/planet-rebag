import React, { useState, useRef } from "react";
import "../assets/css/otp.css";
import PropTypes from "prop-types";

const initializeRefs = (length) =>
  Array(length)
    .fill(null)
    .map(() => useRef(null));

const Otpinput = ({ length }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputRefs = useRef(initializeRefs(length));

  const handleChange = (e, index) => {
    // ... your handleChange logic
  };

  const handleKeyDown = (e, index) => {
    // ... your handleKeyDown logic
  };

  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

Otpinput.propTypes = {
  length: PropTypes.any,
};

export default Otpinput;
