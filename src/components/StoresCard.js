import React from "react";
import Card from "react-bootstrap/Card";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StoresCard = (props) => {
  const {
    storeName,
    storeId,
    itemsReturned,
    totalRedeemPrice,
    totalSubStores,
    numberOfPos,
    storeLocation,
    btnText,
    storeIcon,
  } = props;
  return (
    <>
      <Card className="store-card">
        <Card.Header className="px-4 py-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="store-logo">{storeIcon}</div>
              <h3 className="fs-5 d-sm-block d-none">{storeName}</h3>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Link to="/stores-details">
              <button className="green-btn height-32px font-weight-600 rounded-8px py-2 px-3">
                {btnText}
              </button>
              </Link>
              <ThreeDotsIcon />
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="flex-wrap">
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Store ID</h6>
                <p>{storeId}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Items Returned</h6>
                <p>{itemsReturned}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Total Redeem Price</h6>
                <p>{totalRedeemPrice}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <h6 className="mb-2 font-weight-700">Total Sub Stores</h6>
              <p>{totalSubStores}</p>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <h6 className="mb-2 font-weight-700">No. of POS</h6>
              <p>{numberOfPos}</p>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <h6 className="mb-2 font-weight-700">Store Location</h6>
              <p>{storeLocation}</p>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="px-4 py-3 bg-white">
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Available"
              className="d-flex align-items-center gap-2 p-0 font-weight-700"
            />
          </Form>
        </Card.Footer>
      </Card>
    </>
  );
};

export default StoresCard;
