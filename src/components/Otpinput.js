/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from "react";
import "../assets/css/otp.css";
import PropTypes from "prop-types";

const initializeRefs = (length) =>
  Array(length)
    .fill(null)
    .map(() => useRef(null));

const Otpinput = ({ length }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputRefs = useRef(initializeRefs(length));

  useEffect(() => {
    setOTP(Array(length).fill(""));
  }, [length]);

  const handleChange = (e, index) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);
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
        />
      ))}
    </div>
  );
};

Otpinput.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Otpinput;
