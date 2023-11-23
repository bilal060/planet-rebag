import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/stores.css";
import { Col, Modal, Row } from "react-bootstrap";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../shared/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  addStore,
  updateStore,
} from "../../store/store/actions/actionCreators";

const NewAddOrUpdateStoreModel = ({ modalShow, setModalShow }) => {
  const dispatch = useDispatch();
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
    name: !isEditing ? "" : updatedStoreData.name,
  };
  const initialValues = {
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Store Name is Required"),
  });
  const handleAddStore = async (values, resetForm) => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (storeImg) formData.append("storeImage", storeImg);
    try {
      if (isEditing) {
        dispatch(updateStore(updatedStoreData._id, formData));
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
    if (resetForm) resetForm();
    setStoreImg(null);
    setModalShow(false);
  };

  return (
    <div className="stores">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onExit={() => handleCancel()}
        backdrop="static"
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
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) =>
              handleAddStore(values, resetForm)
            }
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="name" className="font-16">
                      Store Name
                    </label>
                  </div>
                  <TextField
                    placeholder="Enter your store name"
                    name="name"
                    type={"text"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
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
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setStoreImg(file);
                      }}
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

NewAddOrUpdateStoreModel.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default NewAddOrUpdateStoreModel;
