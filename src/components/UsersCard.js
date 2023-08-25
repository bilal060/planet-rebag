import React from "react";
import Card from "react-bootstrap/Card";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsersCard = (props) => {
  const { userName, userId, scannedItems, status, btnText, storeIcon } = props;
  const navigate = useNavigate();
  return (
    <>
      <Card className="store-card">
        <Card.Header className="px-4 py-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="store-logo">{storeIcon}</div>
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => navigate("/users/detail")}
                className="green-btn height-32px font-weight-600 rounded-8px py-2 px-3"
              >
                {btnText}
              </button>
              <ThreeDotsIcon />
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="flex-wrap">
            <Col sm="8" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">User Name</h6>
                <p>{userName}</p>
              </div>
            </Col>
            <Col sm="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">User ID</h6>
                <p>{userId}</p>
              </div>
            </Col>
          </Row>
          <Row className="flex-wrap">
            <Col sm="8" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Total Scanned Items</h6>
                <p>{scannedItems}</p>
              </div>
            </Col>
            <Col sm="4" className="p-0">
              <h6 className="mb-2 font-weight-700">Status</h6>
              <p>{status}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersCard;
