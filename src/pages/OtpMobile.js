import React, { useState } from "react";
import AuthCircles from "../components/auth_circles/AuthCircles";
import AuthFooter from "../components/auth_footer/AuthFooter";
import Logo from "../assets/images/Logo.svg";
import "../assets/css/auth.css";
import logo_rebag from "../assets/images/plant-rebag-logo.svg";
import Form from "react-bootstrap/Form";
const OtpMobile = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const mykey = "0123456789".split("");

  const handleInputChange = (event, index) => {
    const key = event.key;
    const updatedOtp = [...otp];

    if (event.keyCode === 8 && index > 0) {
      // Handle backspace
      updatedOtp[index - 1] = "";
    } else if (index < 3 && mykey.indexOf(key) !== -1) {
      // Move to next input
      updatedOtp[index + 1] = "";
    }

    updatedOtp[index] = key;
    setOtp(updatedOtp);
  };

  const finalKey = otp.join("");
  const isOtpValid = finalKey.length === 4;
  return (
    <>
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div className="login-container">
        <div className="login-sub w-custom">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo_rebag} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <span className="mb-5">
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
              Enter OTP
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              A 4 digit code sent to +97101******789.
            </span>
          </span>
          <div className="login-btn mt-5">
            <Form>
              <div className="form-group">
                <label for="emailInput" className="font-16 text-center">
                  Enter OTP
                </label>
                {/* <input
                  type="email"
                  className="form-control emailInput"
                  placeholder="@ Enter your email"
                /> */}
                <div className="otp-input-fields">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className={`otp__digit otp__field__${index + 1}`}
                      value={digit}
                      maxLength={1}
                      onKeyDown={(event) => handleInputChange(event, index)}
                      onChange={() => {}}
                    />
                  ))}
                </div>
                <div className="result">
                  <p id="_otp" className={isOtpValid ? "_ok" : "_notok"}>
                    {finalKey}
                  </p>
                </div>
              </div>
              <div className="login-btn mt-3">
                <button className="guest-btn btn-lg btn-block">Verify</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default OtpMobile;
