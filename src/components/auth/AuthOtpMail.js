import React, { useEffect, useState } from "react";
//import logo_rebag from "../../assets/images/plant-rebag-logo.svg";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import Logo from "../../assets/images/Logo.svg";
import Form from "react-bootstrap/Form";
import Otpinput from "../../components/Otpinput";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../store/storeIndex";
import Toast from "../../shared/Toast";
const AuthOtpMail = () => {
  const [dimension, setDimension] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOTP] = useState(Array(4).fill(""));
  let [searchParams] = useSearchParams();
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

  const submithandler = (event) => {
    event.preventDefault();
    if (otp.length > 0) {
      const data = {
        email: searchParams.get("email"),
        otp: otp.join(""),
      };
      dispatch(verifyToken(data, navigate));
    } else {
      Toast.error("OTP is required");
    }
  };
  return (
    <>
      <div
        className={`login-container ${
          dimension?.height < 680
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
        <div className="login-sub text-center flex-column">
          <div className="logo-image d-flex justify-content-center">
            <img src={Logo} alt="" className="img-fluid mb-2 logo-hide" />
          </div>
          <div className="auth-responsive">
            <span className="mb-5">
              <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
                Enter OTP
              </h3>
              <span className="logo-text d-flex justify-content-center mt-2">
                A 4 digit code sent to ada*****@gmail.com
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
                    <Otpinput length={4} setOTP={setOTP} otp={otp} />
                  </div>
                </div>
                <div className="login-btn mt-3">
                  <button
                    type="submit"
                    onClick={submithandler}
                    className="guest-btn btn-lg btn-block"
                  >
                    Verify
                  </button>
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

export default AuthOtpMail;
