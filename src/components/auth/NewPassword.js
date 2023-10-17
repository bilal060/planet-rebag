import React, { useEffect, useState } from "react";
import AuthFooter from "../auth_footer/AuthFooter";
import "../../assets/css/auth.css";
import Logo from "../../assets/images/Logo.svg";
import EyeIcon from "../../assets/images/EyeIcon.js";
import EyeiconClose from "../../assets/images/EyeiconClose";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import { getWindowDimensions } from "../../helpers/getWindowDimentions";

const newPasswordValidationSchema = Yup.object().shape({
  tempPassword: Yup.string().required("Password is Required"),
  newPassword: Yup.string()
    .min(8, "Password minimum length should be 8")
    .required("New Password is Required"),
  confirmPassword: Yup.string().when(
    ["newPassword", "tempPassword"],
    (newPassword, schema) => {
      return newPassword && newPassword.length > 0
        ? schema
            .oneOf(
              [Yup.ref("newPassword")],
              "Both passwords need to be the same",
            )
            .required("Password is Required")
        : schema;
    },
  ),
});
const NewPassword = () => {
  const initialValues = {
    tempPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  //const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
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
          dimension?.height < 840 || dimension?.width < 767
            ? "justify-content-start py-sm-5"
            : "justify-content-center"
        }`}
      >
        <div className="login-sub text-center flex-column">
          <img src={Logo} alt="" className="d-sm-none d-block mt-5 pt-5" />
          <div className="auth-responsive">
            <h3 className="font-32 big-text-color mb-3">Create New Password</h3>
            <span className="font-16-400 small-text-color">
              Using New password create your account
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={newPasswordValidationSchema}
            >
              {() => (
                <Form>
                  <div className="form-group mt-4">
                    <div className="label-inputs-start">
                      <label
                        htmlFor="passwordInput"
                        className="font-16 text-start"
                      >
                        New Password
                      </label>
                    </div>
                    <div className="input-group mt-2">
                      <TextField
                        righticon={
                          <span onClick={() => setEye1(!eye1)}>
                            {eye1 ? <EyeiconClose /> : <EyeIcon />}
                          </span>
                        }
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        name="newPassword"
                        type={eye1 ? "text" : "password"}
                      />
                      <ErrorMessage
                        component="div"
                        name="newPassword"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <div className="label-inputs-start">
                      <label
                        htmlFor="passwordInput"
                        className="font-16 text-start"
                      >
                        Confirm New Password
                      </label>
                    </div>
                    <div className="input-group mt-2">
                      <TextField
                        righticon={
                          <span onClick={() => setEye2(!eye2)}>
                            {eye2 ? <EyeiconClose /> : <EyeIcon />}
                          </span>
                        }
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        name="confirmPassword"
                        type={eye2 ? "text" : "password"}
                      />
                      <ErrorMessage
                        component="div"
                        name="confirmPassword"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <div className="login-btn mt-3">
                    <button className="guest-btn btn-lg btn-block">
                      Create Account
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

export default NewPassword;
