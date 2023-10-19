import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/stores.css";
import { Col, Modal, Row } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextField from "../../shared/TextField";
import EyeiconClose from "../../assets/images/EyeiconClose";
import EyeIcon from "../../assets/images/EyeIcon";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addStore,
  updateStore,
} from "../../store/store/actions/actionCreators";

const storeSignupValidationSchema = Yup.object().shape({
  storeName: Yup.string().required("Store Name is Required"),
  storeEmail: Yup.string().email().required("Email is Required"),
  password: Yup.string().required("Password is Required").length(8),
  ownBagsPrice: Yup.number().required("Own Bags Price is Required"),
  otherBagsPrice: Yup.number().required("Other Bags Price is Required"),
  otherBottlesPrice: Yup.number().required("Other Bottles Price is Required"),
  maiDubaiBottlesPrice: Yup.number().required(
    "Mai Dubai Bottles Price is Required",
  ),
  storeType: Yup.string().required("Store Type is Required"),
  hasBottles: Yup.boolean(),
  ownBottlesPrice: Yup.number().when("hasBottles", {
    is: true,
    then: () => Yup.number().required("Own Bottles Price is required"),
    otherwise: () => Yup.number(),
  }),
});

const storeEditValidationSchema = Yup.object().shape({
  storeName: Yup.string().required("Store Name is Required"),
  ownBagsPrice: Yup.number().required("Own Bags Price is Required"),
  otherBagsPrice: Yup.number().required("Other Bags Price is Required"),
  otherBottlesPrice: Yup.number().required("Other Bottles Price is Required"),
  maiDubaiBottlesPrice: Yup.number().required(
    "Mai Dubai Bottles Price is Required",
  ),
  storeType: Yup.string().required("Store Type is Required"),
  hasBottles: Yup.boolean(),
  ownBottlesPrice: Yup.number().when("hasBottles", {
    is: true,
    then: () => Yup.number().required("Own Bottles Price is required"),
    otherwise: () => Yup.number(),
  }),
});

const AddOrUpdateStoreModel = ({ modalShow, setModalShow }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [storeImg, setStoreImg] = useState(null);
  const isEditing = useSelector((state) => state?.store?.isEditing);
  const updatedStoreData = useSelector(
    (state) => state?.store?.updatedStoreData,
  );

  useEffect(() => {
    if (isEditing) {
      setModalShow(true);
    }
  }, [isEditing && updatedStoreData]);

  const editInitialValues = {
    storeName: !isEditing ? "" : updatedStoreData.storeName,
    storeType: !isEditing ? "gasStation" : updatedStoreData.storeType,
    ownBagsPrice: !isEditing ? "" : updatedStoreData.ownBagsPrice,
    otherBagsPrice: !isEditing ? "" : updatedStoreData.otherBagsPrice,
    otherBottlesPrice: !isEditing ? "" : updatedStoreData.otherBottlesPrice,
    maiDubaiBottlesPrice: !isEditing
      ? ""
      : updatedStoreData.maiDubaiBottlesPrice,
    hasBottles: !isEditing ? false : updatedStoreData.hasBottles,
    ownBottlesPrice: !isEditing ? "" : updatedStoreData.ownBottlesPrice,
  };

  const initialValues = {
    storeName: "",
    storeEmail: "",
    password: "",
    storeType: "gasStation",
    ownBagsPrice: "",
    otherBagsPrice: "",
    otherBottlesPrice: "",
    maiDubaiBottlesPrice: "",
    hasBottles: false,
    ownBottlesPrice: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setStoreImg(file);
  };

  const handleAddStore = async (values, resetForm) => {
    const formData = new FormData();
    formData.append("storeName", values.storeName);
    formData.append("storeEmail", values.storeEmail);
    formData.append("password", values.password);
    formData.append("storeType", values.storeType);
    formData.append("ownBagsPrice", values.ownBagsPrice);
    formData.append("otherBagsPrice", values.otherBagsPrice);
    formData.append("otherBottlesPrice", values.otherBottlesPrice);
    formData.append("maiDubaiBottlesPrice", values.maiDubaiBottlesPrice);
    formData.append("hasBottles", values.hasBottles);
    formData.append("ownBottlesPrice", values.ownBottlesPrice);
    if (storeImg) formData.append("storeImage", storeImg);

    try {
      if (isEditing) {
        dispatch(updateStore(updatedStoreData._id, values));
      } else {
        dispatch(addStore(formData));
      }
      resetForm();
      setStoreImg(null);
      setModalShow(false);
    } catch (err) {
      console.log(err, "err");
    }
    dispatch({
      type: "SET_STORE_IS_EDITING",
      payload: { isEditing: false },
    });
  };

  const handleCancel = (resetForm) => {
    dispatch({
      type: "SET_STORE_IS_EDITING",
      payload: { isEditing: false },
    });
    resetForm();
    setStoreImg(null);
    setModalShow(false);
  };

  return (
    <div className="stores">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            {isEditing ? "Update" : "Add"} Stores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={!isEditing ? initialValues : editInitialValues}
            validationSchema={
              !isEditing
                ? storeSignupValidationSchema
                : storeEditValidationSchema
            }
            onSubmit={(values, { resetForm }) =>
              handleAddStore(values, resetForm)
            }
          >
            {({ values, resetForm }) => (
              <Form>
                <div className="form-group">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="storeName" className="font-16">
                      Store Name
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your store name"
                    name="storeName"
                    type={"text"}
                  />
                  <ErrorMessage
                    component="div"
                    name="storeName"
                    className="invalid-feedback"
                  />
                </div>

                {!isEditing && (
                  <>
                    <div className="form-group">
                      <div className="label-inputs-start mb-2">
                        <label htmlFor="storeEmail" className="font-16">
                          Store email
                        </label>
                      </div>

                      <TextField
                        placeholder="Enter your Email"
                        name="storeEmail"
                        type={"email"}
                      />
                      <ErrorMessage
                        component="div"
                        name="storeEmail"
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
                  </>
                )}
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="ownBagsPrice" className="font-16">
                      Own Bags Price
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your Own Bags Price"
                    name="ownBagsPrice"
                    type={"number"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="otherBagsPrice" className="font-16">
                      Other Bags Price
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your Other Bags Price"
                    name="otherBagsPrice"
                    type={"number"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="otherBottlesPrice" className="font-16">
                      Other Bottles Price
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your Other Bottles Price"
                    name="otherBottlesPrice"
                    type={"number"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="otherBottlesPrice" className="font-16">
                      Mai Dubai Bottles Price
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your Other Bottles Price"
                    name="maiDubaiBottlesPrice"
                    type={"number"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="label-inputs-start mb-2 d-flex align-content-center">
                    <label htmlFor="hasBottles" className="font-16">
                      Has Bottles
                    </label>
                    <Field
                      className="mx-1"
                      type="checkbox"
                      name="hasBottles"
                      checked={values.hasBottles}
                    />
                  </div>
                </div>
                {values.hasBottles && (
                  <div className="form-group mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="ownBottlesPrice" className="font-16">
                        Own Bottles Price
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your Own Bottles Price"
                      name="ownBottlesPrice"
                      type="number"
                    />
                    <ErrorMessage
                      component="div"
                      name="ownBottlesPrice"
                      className="invalid-feedback"
                    />
                  </div>
                )}
                <div className="form-group mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="storeType" className="font-16">
                      Store Type
                    </label>
                  </div>
                  <Field as="select" name="storeType" className="form-select">
                    <option value="superMart">Super Mart</option>
                    <option value="gasStation">Gas Station</option>
                  </Field>
                </div>

                {!isEditing && (
                  <div className="form-group mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="storeType" className="font-16">
                        Store Image
                      </label>
                    </div>
                    <label className="upload-files cr-p">
                      <input
                        type="file"
                        className="d-none"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => handleImageUpload(e)}
                      />
                      <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
                        <p className="font-16 font-weight-500">
                          {storeImg === null || storeImg === ""
                            ? "Choose File / Drag & Drop Here"
                            : storeImg.name}
                        </p>
                      </div>
                    </label>
                  </div>
                )}

                <Row className="w-100">
                  <Col lg="6" className="mb-lg-0 mb-3">
                    <button
                      className="w-100 green-btn-outline"
                      onClick={() => handleCancel(resetForm)}
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col lg="6">
                    <button
                      className="w-100 green-btn"
                      // onClick={() => setModalShow(false)}
                      type="submit"
                    >
                      {isEditing ? "Update" : "Add"} Store
                    </button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

AddOrUpdateStoreModel.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default AddOrUpdateStoreModel;
