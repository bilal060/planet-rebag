import React from "react";
import Logo from "../../assets/images/Logo.svg";
import "../../assets/css/auth.css";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
});

function ForgetPassword() {
  const initialValues = {
    email: "",
  };

  return (
    <>
      <div className="login-container">
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
            <h3 className="font-32 big-text-color mb-3">Forgot Password?</h3>
            <span className="font-16-400 small-text-color">
              Enter your associated with your account and we’ll send an email
              with instruction to reset your password.
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotPasswordValidationSchema}
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
                      placeholder="@ Enter your email"
                      name="email"
                      type={"email"}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="login-btn mt-3">
                    <button className="guest-btn btn-lg btn-block mt-2">
                      Reset Password
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
}

export default ForgetPassword;
