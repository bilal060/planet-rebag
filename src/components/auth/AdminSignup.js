import React, { useEffect, useState } from "react";
import AuthCircles from "../../components/auth_circles/AuthCircles";
import AuthFooter from "../../components/auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import "react-phone-input-2/lib/style.css";
import EyeiconClose from "../../assets/images/EyeiconClose";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";
import { useDispatch } from "react-redux";
import { userSignup } from "../../store/storeIndex";
import "react-toastify/dist/ReactToastify.css";

const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is Required"),
  email: Yup.string().when("login_option", {
    is: (option) => option === "email",
    then: Yup.string().email().required("Email is Required"),
  }),
  phone: Yup.string().when("login_option", {
    is: (option) => option === "mobile",
    then: Yup.string().required("Mobile Number is Required"),
  }),
  password: Yup.string().required("Password is Required"),
});
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [selectedLoginOption, setSelectedLoginOption] = useState("email");
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const handleRegistration = async (values) => {
    console.log("Working");
    if (selectedLoginOption === "email") {
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      dispatch(userSignup(data, navigate));
    } else if (selectedLoginOption === "mobile") {
      const data = {
        phone: values.phone,
        email: values.email,
        password: values.password,
      };
      dispatch(userSignup(data, navigate));
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginOptionChange = (option) => {
    setSelectedLoginOption(option);
  };

  const direct = () => {
    navigate("/login");
  };
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
      <div className="logo-hide-top">
        <img src={Logo} alt="" className="logo-container logo" />
      </div>
      <AuthCircles />
      <div
        className={`login-container ${
          dimension?.height < 840 || dimension?.width < 767
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
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
              onSubmit={handleRegistration}
            >
              {() => (
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
                      name="name"
                      type={"text"}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
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
                        <label htmlFor="phoneInput" className="font-16">
                          Mobile Number
                        </label>
                      </div>
                      <TextField
                        placeholder="Enter your mobile number"
                        name="phone"
                        type={"text"}
                      />
                      <ErrorMessage
                        component="div"
                        name="phone"
                        className="invalid-feedback"
                      />
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
                    <button
                      type="submit"
                      className="guest-btn btn-lg btn-block mt-2"
                    >
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
      <div className="d-md-block d-none">
        <AuthFooter />
      </div>
    </>
  );
};

export default SignUp;
