import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Col, Image, Row } from "react-bootstrap";
import TextField from "../../shared/TextField";
import Whatsapp1 from "../../assets/images/icons/whatsapp";
import Insta from "../../assets/images/icons/rishtagram";
import Website from "../../assets/images/icons/website";
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

const ContactUs = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  return (
    <div>
      <h3 className="font-24 font-weight-700 mb-3">Contact Us</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={newPasswordValidationSchema}
      >
        {() => (
          <Form action="" className="text-light-black">
            <Row className="align-items-start pb-2 gap-sm-0">
              <Col sm="6" className=" p-0 m-0">
                <div className="d-flex flex-column full-name custom-w">
                  <TextField
                    icon={
                      <Image
                        fluid
                        className="field-icon"
                        src={<Whatsapp1 />}
                        loading="lazy"
                        width={20}
                        height={20}
                      />
                    }
                    //   righticon={
                    //     <Image
                    //       fluid
                    //       className="field-righticon"
                    //       src={<EyeIcon/>}
                    //       loading="lazy"
                    //       width={20}
                    //       height={20}
                    //       onClick={() => { setEye(!eye) }}
                    //     />
                    //   }
                    placeholder="https://wa.me/03167422717?text="
                    name="oldPassword"
                    type="text"
                  />
                  <ErrorMessage
                    component="div"
                    name="oldPassword"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col sm="6" className="pe-0">
                <TextField
                  icon={
                    <Image
                      fluid
                      className="field-icon"
                      src={<Insta />}
                      loading="lazy"
                      width={20}
                      height={20}
                    />
                  }
                  //   righticon={
                  //     <Image
                  //       fluid
                  //       className="field-righticon"
                  //       src={<EyeIcon/>}
                  //       loading="lazy"
                  //       width={20}
                  //       height={20}
                  //       onClick={() => { setEye1(!eye1) }}
                  //     />
                  //   }
                  placeholder="https://msng.link/o?plant rebag=ig"
                  name="newPassword"
                  type="text"
                />
                <ErrorMessage
                  component="div"
                  name="newPassword"
                  className="invalid-feedback"
                />
              </Col>
              <Col sm="6" className="p-0 m-0">
                <div className="d-flex flex-column full-name custom-w">
                  <TextField
                    icon={
                      <Image
                        fluid
                        className="field-icon"
                        src={<Website />}
                        loading="lazy"
                        width={20}
                        height={20}
                      />
                    }
                    //   righticon={
                    //     <Image
                    //       fluid
                    //       className="field-righticon"
                    //       src={<EyeIcon/>}
                    //       loading="lazy"
                    //       width={20}
                    //       height={20}
                    //       onClick={() => { setEye2(!eye2) }}
                    //     />
                    //   }
                    placeholder="Info@planetrebag.com"
                    name="confirmPassword"
                    type="text"
                  />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
            </Row>
            {/* <Row className="justify-content-end mt-4 gap-sm-0 gap-3">
              
              <Col md="3" sm="4">
                <Button type="submit" className="btn-green w-100 py-75">
                  Save Change
                </Button>
              </Col>
            </Row> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withAccountSettingLayout(ContactUs);
