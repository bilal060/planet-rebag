/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from "react";
import "../assets/css/otp.css";

const initializeRefs = (length) =>
  Array(length)
    .fill(null)
    .map(() => useRef(null));

const Otpinput = ({ length, otp, setOTP }) => {
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

// Otpinput.propTypes = {
//   length: PropTypes.number.isRequired,
// };

export default Otpinput;
