import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Image, Row } from "react-bootstrap";
import TextField from "../../shared/TextField";
// import PassIcon from '../../assets/images/icons/lock.png';
import EyeIcon from '../../assets/images/EyeIcon';
// import CloseEye from '../../assets/images/icons/closeeye.png';
import { useDispatch, useSelector } from "react-redux";
// import { updateUserPassword } from "../../store/storeIndex";
import withAccountSettingLayout from "../../layout/AccountSettingLayout";


export const newPasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Password is Required"),
  newPassword: Yup.string()
    .min(8, "Password minimum length should be 8")
    .required("Password is Required"),
  confirmPassword: Yup.string().when("newPassword", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Both password need to be the same")
      .required("Password is Required"),
  }),
});

const ChangeAccountPassword = () => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);

  const submitHandler = (values) => {
    const data = {
      passwordCurrent: values.oldPassword,
      password: values.newPassword,
      passwordConfirm: values.confirmPassword
    };
    // dispatch(updateUserPassword(data, token));
  };

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);

  return (
    <div>
      <h3 className="font-24 font-weight-700 mb-3">Change Password</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={newPasswordValidationSchema}
        onSubmit={submitHandler}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form action="" className="text-light-black">
            <Row className="align-items-start pb-2 gap-sm-0">
              <Col sm="12" className="mb-sm-2 p-0 m-0">
              <div className="d-flex flex-column full-name custom-w">
                <label className="font-16 font-weight-700 mb-2 mt-5">Current Password</label>
                <TextField
                  righticon={
                    <Image
                      fluid
                      className="field-righticon"
                      src={<EyeIcon/>}
                      loading="lazy"
                      width={20}
                      height={20}
                      onClick={() => { setEye(!eye) }}
                    />
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

              <Col sm="6" className="ps-0">
              <label className="font-16 font-weight-700 mb-2">New Password</label>

                <TextField
                  righticon={
                    <Image
                      fluid
                      className="field-righticon"
                      src={<EyeIcon/>}
                      loading="lazy"
                      width={20}
                      height={20}
                      onClick={() => { setEye1(!eye1) }}
                    />
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
              </Col>
              <Col sm="6" className="p-0 m-0">
              <div className="d-flex flex-column full-name custom-w">
              <label className="font-16 font-weight-700 mb-2">Confirm New Password</label>

                <TextField 
                  righticon={
                    <Image
                      fluid
                      className="field-righticon"
                      src={<EyeIcon/>}
                      loading="lazy"
                      width={20}
                      height={20}
                      onClick={() => { setEye2(!eye2) }}
                    />
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
            <Row className="justify-content-end mt-4 gap-sm-0 gap-3">
              
              <Col md="3" sm="4">
                <Button type="submit" className="btn-green w-100 py-75">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withAccountSettingLayout(AccountNewPassword)
