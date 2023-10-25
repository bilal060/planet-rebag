import React from "react";
import { Card, Badge, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";

const ChangePriceCard = (props) => {
  const {
    id,
    ownBagsPrice,
    otherBagsPrice,
    ownBottlesPrice,
    otherBottlesPrice,
    maiDubaiBottlesPrice,
    status,
    createdAt,
  } = props;

  return (
    <>
      <Card className="store-card" key={id}>
        <Card.Header className="px-4 py-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <h4 className="d-flex align-items-center justify-content-center">
                Request Status:{" "}
                <Badge
                  className="mx-2 text-capitalize"
                  pill
                  bg={
                    status === "approved"
                      ? "success"
                      : status === "pending"
                      ? "warning"
                      : "danger"
                  }
                >
                  {status}
                </Badge>
              </h4>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="flex-wrap">
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">new ownBags Price</h6>
                <p>{ownBagsPrice}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">new otherBags Price</h6>
                <p>{otherBagsPrice || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">new ownBottles Price</h6>
                <p>{ownBottlesPrice || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">new otherBottles Price</h6>
                <p>{otherBottlesPrice || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">
                  new maiDubaiBottles Price
                </h6>
                <p>{maiDubaiBottlesPrice}</p>
              </div>
            </Col>
            <Col sm="4" md="12" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Date</h6>
                <p>{moment(createdAt).format("h:mm A | DD/MM/YYYY")}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

ChangePriceCard.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
  ownBagsPrice: PropTypes.any,
  otherBagsPrice: PropTypes.any,
  ownBottlesPrice: PropTypes.any,
  otherBottlesPrice: PropTypes.any,
  maiDubaiBottlesPrice: PropTypes.any,
  status: PropTypes.any,
  createdAt: PropTypes.any,
};
export default ChangePriceCard;
