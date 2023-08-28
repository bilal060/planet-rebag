/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
//import "./OTPIInput.css"; // Create this CSS file for styling
import "../assets/css/otp.css";
const Otpinput = ({ length }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputRefs = Array(length)
    .fill(null)
    .map(() => useRef(null));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (value !== "" && index < length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const newOTP = [...otp];
      newOTP[index - 1] = "";
      setOTP(newOTP);
      inputRefs[index - 1].current.focus();
    }
  };
  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          //placeholder={index + 6}
        />
      ))}
    </div>
  );
};

export default Otpinput;
