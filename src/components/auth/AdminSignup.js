import React, { useState } from "react";
import AuthCircles from "../../components/auth_circles/AuthCircles";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import EyeiconClose from "../../assets/images/EyeiconClose";

const signupValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is Required"),
  email: Yup.string().email().required("Email is Required"),
  mobNo: Yup.string().required("Mobile Number is Required"),
  password: Yup.string().required("Password is Required"),
});
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");
  const [phone, setPhone] = useState();
  const initialValues = {
    fullName: "",
    email: "",
    mobNo: "",
    password: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginOptionChange = (option) => {
    setSelectedLoginOption(option);
  };

  const navigate = useNavigate();

  const direct = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div className="login-container">
        <div className="login-sub text-center flex-column">
          <div className="logo-image d-flex justify-content-center mb-sm-3">
            <img src={Logo} alt="" className="d-md-none d-block" />
          </div>
          <div className="auth-responsive">
            <h3 className="font-32 big-text-color mb-3">Sign Up</h3>
            <span className="font-16-400 small-text-color">
              Create your new account as a.
            </span>
            <div className="label-inputs-start mt-5">
              <label htmlFor="loginOption" className="font-16">
                Sign up With
              </label>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={signupValidationSchema}
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
                  <div className="form-group mt-5 mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="emailInput" className="font-16">
                        Full Name
                      </label>
                    </div>

                    <TextField
                      placeholder="Enter your full name"
                      name="fullName"
                      type={"text"}
                    />
                    <ErrorMessage
                      component="div"
                      name="fullName"
                      className="invalid-feedback"
                    />
                  </div>
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

                  <div className="login-btn mt-3">
                    <button className="guest-btn btn-lg btn-block mt-2">
                      Submit
                    </button>
                  </div>
                  <div className="account-signup mt-4">
                    <div className="signup-link">
                      <span>Already have an account?</span>
                      <a onClick={direct} className="text-green">
                        Login
                      </a>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="d-md-none d-block">
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default SignUp;