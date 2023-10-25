import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "../../shared/TextField";
import PropTypes from "prop-types";
import Axios from "../../axios/Axios";
import Toast from "../../shared/Toast";

export const changePriceValidationSchema = Yup.object().shape({
  ownBagsPrice: Yup.number().required("Own Bags Price is Required"),
  otherBagsPrice: Yup.number().required("Other Bags Price is Required"),
  otherBottlesPrice: Yup.number().required("Other Bottles Price is Required"),
  maiDubaiBottlesPrice: Yup.number().required(
    "Mai Dubai Bottles Price is Required",
  ),
  ownBottlesPrice: Yup.number().required("Own Bottles Price is Required"),
});

const ChangePriceFormModal = ({ modalShow, setModalShow, myStore }) => {
  const initialValues = {
    ownBagsPrice: myStore?.ownBagsPrice || 0,
    otherBagsPrice: myStore?.otherBagsPrice || 0,
    otherBottlesPrice: myStore?.otherBottlesPrice || 0,
    maiDubaiBottlesPrice: myStore?.maiDubaiBottlesPrice || 0,
    ownBottlesPrice: myStore?.ownBottlesPrice || 0,
  };

  const handleAddNewRequest = async (values) => {
    try {
      const requestData = {
        userId: myStore.userId,
        storeId: myStore._id,
        ...values,
      };

      await Axios.post("/priceChange/addNewRequest", requestData);

      setModalShow(false);
    } catch (error) {
      Toast.error(error?.response?.data?.message);
    }
  };
  const handleCancel = (resetForm) => {
    if (resetForm) resetForm();
    setModalShow(false);
  };

  return (
    <div>
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
            Change Price Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="font-24 font-weight-700 mb-5">Change Price Request</h3>
          {myStore && (
            <Formik
              initialValues={initialValues}
              validationSchema={changePriceValidationSchema}
              onSubmit={(values) => handleAddNewRequest(values)}
            >
              {() => (
                <Form>
                  <div className="form-group  mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="ownBagsPrice" className="font-16">
                        Own Bags Price
                      </label>
                    </div>

                    <TextField
                      placeholder="Own Bags Price"
                      name="ownBagsPrice"
                      type={"number"}
                    />
                    <ErrorMessage
                      component="div"
                      name="ownBagsPrice"
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
                      placeholder="Other Bags Price"
                      name="otherBagsPrice"
                      type={"number"}
                    />
                    <ErrorMessage
                      component="div"
                      name="otherBagsPrice"
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
                      placeholder="Other Bottles Price"
                      name="otherBottlesPrice"
                      type={"number"}
                    />
                    <ErrorMessage
                      component="div"
                      name="otherBottlesPrice"
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
                      placeholder="Other Bottles Price"
                      name="maiDubaiBottlesPrice"
                      type={"number"}
                    />
                    <ErrorMessage
                      component="div"
                      name="maiDubaiBottlesPrice"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="ownBottlesPrice" className="font-16">
                        Own Bottles Price
                      </label>
                    </div>
                    <TextField
                      placeholder="Own Bottles Price"
                      name="ownBottlesPrice"
                      type="number"
                    />
                    <ErrorMessage
                      component="div"
                      name="ownBottlesPrice"
                      className="invalid-feedback"
                    />
                  </div>

                  <Row className="w-100">
                    <Col lg="12">
                      <button type="submit" className="w-100 green-btn">
                        Send Request
                      </button>
                    </Col>
                    <Col lg="12" className="mt-3">
                      <button
                        type="button"
                        className="w-100 green-btn-outline"
                        onClick={() => handleCancel()}
                      >
                        Cancel
                      </button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

ChangePriceFormModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
  myStore: PropTypes.object,
};

export default ChangePriceFormModal;
