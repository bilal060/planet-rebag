/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes, { object } from "prop-types";
import "../../assets/css/stores.css";
import { Col, Modal, Row } from "react-bootstrap";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "../../shared/TextField";
import * as Yup from "yup";
import Axios from "../../axios/Axios";
import Toast from "../../shared/Toast";

const AddOrUpdatePriceModel = ({ modalShow, setModalShow, data, setData }) => {
  const [isLoading, setisLoading] = useState(false);
  const getPrice = () => {
    setisLoading(true);
    Axios.get(`price`, {
      withCredentials: true,
    })
      .then((response) => {
        setData(response.data.data.length > 0 ? response.data.data[0] : {});
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

  const handleAddPrice = async (values) => {
    Axios.post(`price/addPrice`, values, {
      withCredentials: true,
    })
      .then(() => {
        getPrice();
        Toast.success(" Price Add Succecfully ");
        setModalShow(false);
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
  };
  const initialValues = {
    co2emissionBottlesPrice: 0,
    wasteRecycledBottlesPrice: 0,
    co2emissionBagsPrice: 0,
    wasteRecycledBagsPrice: 0,
  };

  const UpdateValues = {
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
        backdrop="static"
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            {data && Object.keys(data).length > 0 ? "Update" : "Add"} Price
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoading && (
            <Formik
              initialValues={
                data && Object.keys(data).length > 0
                  ? UpdateValues
                  : initialValues
              }
              validationSchema={ValidationSchema}
              onSubmit={(values, { resetForm }) =>
                data && Object.keys(data).length > 0
                  ? handleUpdatePrice(values, resetForm)
                  : handleAddPrice(values, resetForm)
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
                        Enter CO2Emission Bottles Value
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter CO2 EmissionBottles Value"
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
                        Enter CO2Emission Bags Value
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter  CO2 EmissionBagsPrice Value"
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
                        Enter Waste Recycled Bags Value
                      </label>
                    </div>
                    <TextField
                      placeholder="Enter Waste Recycled Bags Val6ue"
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
                        Enter Waste Recycled Bottles Value
                      </label>
                    </div>
                    <TextField
                      placeholder=" Enter Waste Recycled Bags Value"
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
                        {data && Object.keys(data).length > 0
                          ? "Update"
                          : "Add"}
                        Price
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
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default AddOrUpdatePriceModel;
