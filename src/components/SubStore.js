import React, { useState } from "react";
import "../assets/css/stores.css";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import StoresCard from "./StoresCard";
import { Col, Form, Modal, Row } from "react-bootstrap";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";

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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Store Name
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="Enter store name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Email / Contact Number
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="Enter email / Contact Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Store Location
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="Enter store location"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Temporary Password
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </Form.Group>
          </Form>
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
