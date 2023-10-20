import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Modal, Row } from "react-bootstrap";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "../../shared/TextField";
import { useDispatch } from "react-redux";
import { dealSignupValidationSchema } from "./dealFormIkYupData";
import { addDeal } from "../../store/deal/actions/actionCreators";

const AddOrUpdateDealModel = ({ modalShow, setModalShow }) => {
  const dispatch = useDispatch();
  const [dealIcon, setDealIcon] = useState(null);

  const initialValues = {
    returnQty: "",
    description: "",
    vendor: "",
    amount: null,
    link: "",
    name: "",
    percentage: null,
  };

  const handleAddDeal = async (values, resetForm) => {
    const formData = new FormData();
    formData.append("returnQty", values.returnQty);
    formData.append("description", values.description);
    formData.append("vendor", values.vendor);
    formData.append("link", values.link);
    formData.append("name", values.name);
    formData.append("amount", values.amount);
    formData.append("percentage", values.percentage);
    if (dealIcon) formData.append("dealIcon", dealIcon);

    try {
      dispatch(addDeal(formData));
      resetForm();
      setDealIcon(null);
      setModalShow(false);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const handleCancel = (resetForm) => {
    if (resetForm) resetForm();
    setDealIcon(null);
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
        onExit={() => handleCancel()}
        backdrop="static"
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            Add Deal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={dealSignupValidationSchema}
            onSubmit={(values, { resetForm }) =>
              handleAddDeal(values, resetForm)
            }
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="name" className="font-16">
                      Deal Name
                    </label>
                  </div>

                  <TextField placeholder="Deal name" name="name" type="text" />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="vendor" className="font-16">
                      Vendor Name
                    </label>
                  </div>

                  <TextField
                    placeholder="Vendor Name"
                    name="vendor"
                    type="text"
                  />
                  <ErrorMessage
                    component="div"
                    name="vendor"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="amount" className="font-16">
                      Amount
                    </label>
                  </div>

                  <TextField placeholder="Amount" name="amount" type="number" />
                  <ErrorMessage
                    component="div"
                    name="amount"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="returnQty" className="font-16">
                      Return Quantity
                    </label>
                  </div>

                  <TextField
                    placeholder="Return Quantity"
                    name="returnQty"
                    type="number"
                  />
                  <ErrorMessage
                    component="div"
                    name="returnQty"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="link" className="font-16">
                      Deal Link
                    </label>
                  </div>

                  <TextField placeholder="Deal Link" name="link" type="text" />
                  <ErrorMessage
                    component="div"
                    name="link"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="percentage" className="font-16">
                      Percentage
                    </label>
                  </div>

                  <TextField
                    placeholder="Percentage"
                    name="percentage"
                    type="number"
                  />
                  <ErrorMessage
                    component="div"
                    name="percentage"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group  mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="description" className="font-16">
                      Description
                    </label>
                  </div>

                  <TextField
                    placeholder="Description"
                    name="description"
                    type="text"
                  />
                  <ErrorMessage
                    component="div"
                    name="description"
                    className="invalid-feedback"
                  />
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
                    <button className="w-100 green-btn" type="submit">
                      Add Deal
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

AddOrUpdateDealModel.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default AddOrUpdateDealModel;
