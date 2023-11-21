/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/stores.css";
import { Col, Modal, Row } from "react-bootstrap";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "../../shared/TextField";
import * as Yup from "yup";
import Axios from "../../axios/Axios";
import Toast from "../../shared/Toast";

const AddOrUpdatePriceModel = ({ modalShow, setModalShow }) => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState({
    co2emissionBottlesPrice: 0,
    co2emissionBagsPrice: 0,
    wasteRecycledBagsPrice: 0,
    wasteRecycledBottlesPrice: 0,
  });
  const getPrice = () => {
    setisLoading(true);
    Axios.get(`price`, {
      withCredentials: true,
    })
      .then((response) => {
        setData(response.data.data[0]);
        setisLoading(false);
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
        setisLoading(false);
      });
  };
  useEffect(() => {
    getPrice();
  }, []);
  const handleUpdatePrice = async (values) => {
    Axios.patch(`price/${data._id}`, values, {
      withCredentials: true,
    })
      .then(() => {
        getPrice();
        Toast.success(" Price Updated Succecfully ");
        setModalShow(false);
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
  };
  const initialValues = {
    co2emissionBottlesPrice: data?.co2emissionBottlesPrice,
    wasteRecycledBottlesPrice: data?.co2emissionBagsPrice,
    co2emissionBagsPrice: data?.wasteRecycledBagsPrice,
    wasteRecycledBagsPrice: data?.wasteRecycledBottlesPrice,
  };

  const ValidationSchema = Yup.object().shape({
    co2emissionBottlesPrice: Yup.number().required(
      "co2emissionBottlesPrice  is Required",
    ),
    wasteRecycledBottlesPrice: Yup.number().required(
      "wasteRecycledBottlesPrice  is Required",
    ),
    co2emissionBagsPrice: Yup.number().required(
      "wasteRecycledBottlesPrice is Required",
    ),
    wasteRecycledBagsPrice: Yup.number().required(
      "wasteRecycledBagsPriceis Required",
    ),
  });

  return (
    <div className="stores">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // onExit={() => handleCancel()}
        backdrop="static"
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            Update Price
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoading && (
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={(values, { resetForm }) =>
                handleUpdatePrice(values, resetForm)
              }
            >
              {() => (
                <Form>
                  <div className="form-group">
                    <div className="label-inputs-start mb-2">
                      <label
                        htmlFor="co2emissionBottlesPrice"
                        className="font-16"
                      >
                        co2emissionBottlesPrice
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your co2emissionBottlesPrice"
                      name="co2emissionBottlesPrice"
                      type="number"
                      min="0"
                      step="any"
                    />
                    <ErrorMessage
                      component="div"
                      name="co2emissionBottlesPrice"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="storeName" className="font-16">
                        co2emissionBagsPrice
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your co2emissionBagsPrice"
                      name="co2emissionBagsPrice"
                      type="number"
                      min="0"
                      step="any"
                    />
                    <ErrorMessage
                      component="div"
                      name="co2emissionBagsPrice"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="storeName" className="font-16">
                        wasteRecycledBagsPrice
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your wasteRecycledBagsPrice"
                      name="wasteRecycledBagsPrice"
                      type="number"
                      min="0"
                      step="any"
                    />
                    <ErrorMessage
                      component="div"
                      name="wasteRecycledBagsPrice"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <div className="label-inputs-start mb-2">
                      <label htmlFor="storeName" className="font-16">
                        wasteRecycledBottlesPrice
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter your wasteRecycledBottlesPrice"
                      name="wasteRecycledBottlesPrice"
                      type="number"
                      min="0"
                      step="any"
                    />
                    <ErrorMessage
                      component="div"
                      name="wasteRecycledBottlesPrice"
                      className="invalid-feedback"
                    />
                  </div>
                  <Row className="w-100">
                    <Col lg="6" className="mb-lg-0 mb-3">
                      <button
                        className="w-100 green-btn-outline"
                        onClick={() => setModalShow(false)}
                      >
                        Cancel
                      </button>
                    </Col>
                    <Col lg="6">
                      <button className="w-100 green-btn" type="submit">
                        Update Price
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

AddOrUpdatePriceModel.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default AddOrUpdatePriceModel;
