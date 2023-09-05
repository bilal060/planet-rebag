import React, { useEffect, useState } from "react";
import logo_rebag from "../../assets/images/Logo.svg";
import Form from "react-bootstrap/Form";
import Otpinput from "../../components/Otpinput";
import AuthFooter from "../auth_footer/AuthFooter";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";
const AuthOtpMobile = () => {
  const [dimension, setDimension] = useState();
  useEffect(() => {
    const handleWindowResize = () => {
      const windowdimention = getWindowDimensions();
      setDimension(windowdimention);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [window.innerHeight]);
  return (
    <>
      <div
        className={`login-container ${
          dimension?.height < 680
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
        <div className="login-sub flex-column">
          <div className="logo-image d-flex justify-content-center">
            <img src={logo_rebag} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <div className="auth-responsive">
            <span className="mb-5">
              <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
                Enter OTP
              </h3>
              <span className="logo-text d-flex justify-content-center mt-2 text-center">
                A 4 digit code sent to +97101******789.
              </span>
            </span>
            <div className="login-btn mt-5">
              <Form>
                <div className="form-group">
                  <div className="label-inputs-center">
                    <label htmlFor="emailInput" className="font-16 text-otp">
                      Enter OTP
                    </label>
                  </div>
                  <div className="otp-input mt-3">
                    <Otpinput length={4} />
                  </div>
                </div>
                <div className="login-btn mt-3">
                  <button className="guest-btn btn-lg btn-block">Verify</button>
                </div>
              </Form>
            </div>
            <div className="d-md-none d-block">
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthOtpMobile;
