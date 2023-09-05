import React, { useEffect, useState } from "react";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import EyeIcon from "../../assets/images/EyeIcon";
import EyeiconClose from "../../assets/images/EyeiconClose";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import PhoneInput from "react-phone-input-2";
import Logo from "../../assets/images/Logo.svg";
import "react-phone-input-2/lib/style.css";
import { ErrorMessage, Form, Formik } from "formik";
const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  mobNo: Yup.string().required("Mobile Number is Required"),
  password: Yup.string().required("Password is Required"),
});
import { getWindowDimensions } from "../../helpers/getWindowDimentions";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");
  const initialValues = {
    email: "",
    mobNo: "",
    password: "",
  };
  const [phone, setPhone] = useState();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginOptionChange = (option) => {
    setSelectedLoginOption(option);
  };

  const navigate = useNavigate();

  // const direct = () => {
  //   navigate("/signup");
  // };

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
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />

          <h3 className="font-32 big-text-color">Welcome back!</h3>
          <span className="font-16-400 small-text-color mt-2">
            Login to your account.
          </span>
          <div className="label-inputs-start mt-1">
            <label htmlFor="loginOption" className="font-16">
              Login with
            </label>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
          >
            {({ touched, errors }) => (
              <Form>
                <div className="radio-btn mt-4">
                  <div className="mobile-radio-btn">
                    <label>
                      <input
                        type="radio"
                        className="input-radio mobile-radio ps-2"
                        name="login_option"
                        checked={selectedLoginOption === "email"}
                        onChange={() => handleLoginOptionChange("email")}
                      />
                      <span className="custom-radio"></span>
                      Email
                    </label>
                  </div>
                  <div className="mobile-radio-btn">
                    <label>
                      <input
                        type="radio"
                        className="input-radio mobile-radio ps-2"
                        name="login_option"
                        checked={selectedLoginOption === "mobile"}
                        onChange={() => handleLoginOptionChange("mobile")}
                      />
                      <span className="custom-radio"></span>
                      Mobile Number
                    </label>
                  </div>
                </div>
                <div className="form-group mt-5 mb-3"></div>
                {selectedLoginOption === "email" && (
                  <div className="form-group mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="emailInput" className="font-16">
                        Email
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your email"
                      name="email"
                      type={"email"}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                )}
                {selectedLoginOption === "mobile" && (
                  <div className="form-group mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="emailInput" className="font-16">
                        Mobile Number
                      </label>
                    </div>
                    <div className="custom-phone-input auth-input d-flex align-items-center">
                      <PhoneInput
                        countrySelectProps={{ unicodeFlags: false }}
                        placeholder="Enter Phone Number"
                        onChange={(phone) => setPhone(phone)}
                        inputProps={{
                          name: "phone",
                        }}
                        buttonClass="d-none"
                        inputClass="bg-transparent outline-0 p-0 m-0 border-0 shadow-none custom-phone-input-1 font-18-100"
                      />
                    </div>
                    {touched && errors && !phone && (
                      <p className="invalid-feedback d-block mt-2 fw-bold text-start">
                        Phone is required
                      </p>
                    )}
                  </div>
                )}
                <div className="form-group mt-2">
                  <div className="label-inputs-start">
                    <label
                      htmlFor="passwordInput"
                      className="font-16 text-start"
                    >
                      Password
                    </label>
                  </div>
                  <div className="input-group mt-2">
                    <TextField
                      righticon={
                        <span onClick={togglePasswordVisibility}>
                          {showPassword ? <EyeiconClose /> : <EyeIcon />}
                        </span>
                      }
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      name="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                <div className="remember-forgot mt-3">
                  <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">
                      <svg
                        className="checkbox-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.3577 0H4.65032C1.73687 0 0 1.736 0 4.648V11.344C0 14.264 1.73687 16 4.65032 16H11.3497C14.2631 16 16 14.264 16 11.352V4.648C16.008 1.736 14.2711 0 11.3577 0Z"
                          fill="#CCCCCC"
                        />
                        <path
                          className="checkmark"
                          d="M6.86733 10.8639C6.70725 10.8639 6.55518 10.7999 6.44312 10.6879L4.17799 8.42388C3.94588 8.19188 3.94588 7.80788 4.17799 7.57588C4.41011 7.34388 4.7943 7.34388 5.02642 7.57588L6.86733 9.41588L10.9814 5.30388C11.2135 5.07188 11.5977 5.07188 11.8298 5.30388C12.0619 5.53588 12.0619 5.91988 11.8298 6.15188L7.29154 10.6879C7.17949 10.7999 7.02741 10.8639 6.86733 10.8639Z"
                          fill="#A3A3A3"
                        />
                      </svg>
                      Remember me
                    </label>
                  </div>
                  <div className="forgot-password">
                    <a
                      onClick={() => {
                        navigate("/forgetPassword");
                      }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="login-btn mt-3">
                  <button className="guest-btn btn-lg btn-block mt-2">
                    Login
                  </button>
                </div>
                {/* <div className="account-signup mt-4">
                  <div className="signup-link">
                    <span>Don’t have an account? </span>
                    <a onClick={direct} className="text-green">
                      Sign up
                    </a>
                  </div>
                </div> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <AuthFooter />
    </>
  );
};

export default Login;
