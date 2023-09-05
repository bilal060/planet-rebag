import React, { useState } from "react";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon";
import EyeiconClose from "../../assets/images/EyeiconClose";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";

const adminLoginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
            <h3 className="font-32 big-text-color mb-3">Welcome Back!</h3>
            <span className="font-16-400 small-text-color">
              Scan and Earn Money
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={adminLoginValidationSchema}
            >
              {() => (
                <Form>
                  <div className="radio-btn mt-4"></div>
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
                </Form>
              )}
            </Formik>
            <div className="d-md-none d-block">
              <AuthFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
