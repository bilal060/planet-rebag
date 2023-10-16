import React, { useState } from "react";
import "../assets/css/stores.css";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import StoresCard from "../components/StoresCard";
import { Col, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "../shared/TextField";
import EyeIcon from "../assets/images/EyeIcon";
import EyeiconClose from "../assets/images/EyeiconClose";
//import UploadIcon from "../assets/images/icons/dashboardicons/uploadIcon";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";
const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is Required"),
  email: Yup.string().email().required("Email is Required"),
  phone: Yup.string().optional("Mobile Number is Required"),
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
  const initialValues = {
    storeName: "",
    storeEmail: "",
    phone: "",
    password: "",
    storeType: "gasStation",
    ownBottlesQty: "",
    otherBottlesQty: "",
    ownBagsQty: "",
    otherBagsQty: "",
    ownBagsPrice: "",
    otherBagsPrice: "",
    ownBottlesPrice: "",
    otherBottlesPrice: "",
  };
  // const [file, setFile] = useState(null);
  // const [addCategory, setAddCategory] = useState({
  //   storeName: "",
  //   storeId: "",
  //   itemsReturned: "",
  //   totalRedeemPrice: "",
  //   totalSubStores: "",
  //   numberOfPos: "",
  //   storeLocation: "",
  // });

  // const attachFile = (e) => {
  //   if (e.target.files) {
  //     let imageFile = e.target.files[0];
  //     //   setAddCategory((prevState) => ({
  //     //     ...prevState,
  //     //     photo: Array.from(e.target.files),
  //     //   }));
  //     setFile(imageFile?.name);
  //   }
  // };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="stores">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-12 pe-12">
        <h4 className="fs-3 ">All Stores</h4>
        <button
          className="green-btn-outline d-flex"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add New Store</span>
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="">
          <Modal.Title
            className="ps-12 pe-12"
            id="contained-modal-title-vcenter"
          >
            Add Stores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Row>
              {Object.keys(addCategory).map((key, index) => {
                const label = key.replace(/([a-z])([A-Z])/g, "$1 $2");
                const formattedLabel =
                  label.charAt(0).toUpperCase() + label.slice(1);
                return (
                  <Col lg="6" className="" key={index}>
                    <Form.Group className="mb-3" controlId={key}>
                      <Form.Label className="mb-2 text-capitalize font-weight-600">
                        {formattedLabel}
                      </Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          setAddCategory((prevState) => ({
                            ...prevState,
                            [key]: e.target.value,
                          }))
                        }
                        className="inputstyle"
                        type="text"
                        placeholder={`Enter ${formattedLabel}`}
                      />
                    </Form.Group>
                  </Col>
                );
              })}
            </Row> */}

          {/* <Form.Group
              className="mb-3 ps-12 pe-12"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mb-2">Upload Category Icon</Form.Label>
              <Form.Label className="upload-files">
                <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
                  <UploadIcon />
                  <p className="font-16 font-weight-500">
                    {file === null ? "Upload File" : file}
                  </p>
                </div>
                <Form.Control
                  onChange={(e) => attachFile(e)}
                  className="d-none"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
              </Form.Label>
            </Form.Group> */}
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            // onSubmit={handleRegistration}
          >
            {() => (
              <Form>
                <div className="form-group mt-5 mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="emailInput" className="font-16">
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
                <div className="form-group mt-5 mb-3">
                  <div className="label-inputs-start mb-2">
                    <label htmlFor="emailInput" className="font-16">
                      Store email
                    </label>
                  </div>

                  <TextField
                    placeholder="Enter your Email"
                    name="email"
                    type={"email"}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
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
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className="mt-5">
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
              <button
                className="w-100 green-btn"
                onClick={() => setModalShow(false)}
              >
                Add Store
              </button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Store;
