import React, { useState } from "react";
import "../assets/css/stores.css";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import StoresCard from "./StoresCard";
import { Col, Modal, Row } from "react-bootstrap";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import EyeiconClose from "../assets/images/EyeiconClose";
import EyeIcon from "../assets/images/EyeIcon";
import TextField from "../shared/TextField";

const addsubStoreValidationSchema = Yup.object().shape({
  storeName: Yup.string().required("Store Name is Required"),
  emailorMob: Yup.string().email().required("Email/Contact Number is Required"),
  location: Yup.string().required("Location is Required"),
  password: Yup.string().required("Password is Required"),
});

const cardData = [
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    storeName: "Carrefour",
    storeId: "CF783457",
    itemsReturned: "1209",
    totalRedeemPrice: "AED 5639.00",
    totalSubStores: "16",
    numberOfPos: "60",
    storeLocation: "Al Ain, Abu Dhabi",
  },
];
const Store = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    storeName: "",
    emailorMob: "",
    location: "",
    password: "",
  };
  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
        <h4 className="fs-3 ">All Stores </h4>
        <button
          className="green-btn-outline d-flex"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add Sub Store</span>
        </button>
      </div>
      <Row className="m-0 stores-cards">
        {cardData.map((data, index) => {
          return (
            <Col xl="6" className="mb-4 col" key={index}>
              <StoresCard
                storeName={data.storeName}
                storeId={data.storeId}
                itemsReturned={data.itemsReturned}
                totalRedeemPrice={data.totalRedeemPrice}
                totalSubStores={data.totalSubStores}
                numberOfPos={data.numberOfPos}
                storeLocation={data.storeLocation}
                storeIcon={<StoreLogo />}
                btnText="View Store"
              />
            </Col>
          );
        })}
      </Row>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            Add Sub Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={addsubStoreValidationSchema}
          >
            {() => (
              <Form>
                <div className="form-group mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="emailInput" className="font-16">
                      Store Name
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter store name"
                    name="storeName"
                    type={"text"}
                  />
                  <ErrorMessage
                    component="div"
                    name="storeName"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="emailInput" className="font-16">
                      Email / Contact Number
                    </label>
                  </div>
                  <TextField
                    placeholder="Enter email / Contact Number"
                    name="emailorMob"
                    type={"text"}
                  />
                  <ErrorMessage
                    component="div"
                    name="emailorMob"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="emailInput" className="font-16">
                      Store Location
                    </label>
                  </div>
                  <TextField
                    placeholder="Enter store location"
                    name="location"
                    type={"text"}
                  />
                  <ErrorMessage
                    component="div"
                    name="location"
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
                        <span
                          onClick={togglePasswordVisibility}
                          className="cr-p"
                        >
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
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-column w-100 gap-3">
            <button
              className="green-btn-outline"
              onClick={() => setModalShow(false)}
            >
              Cancel
            </button>
            <button
              className="green-btn font-weight-600"
              onClick={() => setModalShow(false)}
            >
              Add Store
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Store;
