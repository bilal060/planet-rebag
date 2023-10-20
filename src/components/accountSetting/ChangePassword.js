import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import { Button, Col, Row } from "react-bootstrap";
import EyeIcon from "../../assets/images/EyeIcon";
import withAccountSettingLayout from "../../layout/AccountSettingLayout";
import withMainLayout from "../../layout/MainLayout";
import Axios from "../../axios/Axios";
import Toast from "../../shared/Toast";

const newPasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Password is Required"),
  newPassword: Yup.string()
    .min(8, "Password minimum length should be 8")
    .required("New Password is Required"),
  confirmPassword: Yup.string().when(
    ["newPassword", "oldPassword"],
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

const ChangeAccountPassword = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);

  const onChangePasswordSubmit = async (values, formikBag) => {
    try {
      await Axios.patch(
        "/user/updatepassword",
        {
          passwordCurrent: values.oldPassword,
          newPassword: values.newPassword,
        },
        {
          withCredentials: true,
        },
      );
      formikBag.resetForm();
      Toast.success("Password Updated Successfully");
    } catch (error) {
      Toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h3 className="font-24 font-weight-700 mb-5">Change Password</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={newPasswordValidationSchema}
        onSubmit={(values, formikBag) => {
          onChangePasswordSubmit(values, formikBag);
        }}
      >
        {() => (
          <Form action="" className="text-light-black">
            <Row className="align-items-start gap-sm-0">
              <Col sm="12" className="mb-2 p-0">
                <div className="d-flex flex-column full-name custom-w">
                  <label className="font-16 font-weight-700 mb-2">
                    Current Password
                  </label>
                  <TextField
                    righticon={
                      <span onClick={() => setEye(!eye)}>
                        <EyeIcon />
                      </span>
                    }
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    name="oldPassword"
                    type={eye ? "text" : "password"}
                  />
                  <ErrorMessage
                    component="div"
                    name="oldPassword"
                    className="invalid-feedback"
                  />
                </div>
              </Col>

              <Col xl="6" className="mb-2 col-sm-12 p-0 ps-0 pe-xl-4">
                <div className="d-flex flex-column full-name custom-w">
                  <label className="font-16 font-weight-700 mb-2">
                    New Password
                  </label>

                  <TextField
                    righticon={
                      <span onClick={() => setEye1(!eye1)}>
                        <EyeIcon />
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
              </Col>
              <Col xl="6" className="mb-2 col-sm-12 pe-0 m-0 p-0">
                <div className="d-flex flex-column full-name custom-w">
                  <label className="font-16 font-weight-700 mb-2">
                    Confirm New Password
                  </label>

                  <TextField
                    righticon={
                      <span onClick={() => setEye2(!eye2)}>
                        <EyeIcon />
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
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-4 gap-sm-0 gap-3">
              <Button type="submit" className="btn-green px-5 py-75">
                Save Change
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withMainLayout(withAccountSettingLayout(ChangeAccountPassword));
