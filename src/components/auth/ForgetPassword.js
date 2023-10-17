import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import "../../assets/css/auth.css";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../store/storeIndex";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
});

function ForgetPassword() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    phone: "",
  };
  const forgetHandler = (values) => {
    const data = {
      email: values.email,
      phone: values.phone,
    };
    dispatch(forgetPassword(data));
  };
  const [phone, setPhone] = useState();
  const [dimension, setDimension] = useState();
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");

  useEffect(() => {
    const handleWindowResize = () => {
      const windowdimention = getWindowDimensions();
      setDimension(windowdimention);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerHeight]);
  const handleLoginOptionChange = (option) => {
    setSelectedLoginOption(option);
  };
  return (
    <>
      <div
        className={`login-container ${
          dimension?.height < 840
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
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
              onSubmit={forgetHandler}
            >
              {(touched, errors) => (
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
                  {selectedLoginOption === "email" && (
                    <div className="form-group mb-3 mt-5">
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
                  )}
                  {selectedLoginOption === "mobile" && (
                    <div className="form-group mb-3 mt-5">
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
