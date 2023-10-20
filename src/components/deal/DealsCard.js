import React from "react";
import Card from "react-bootstrap/Card";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";
import ImageDisplay from "../../shared/ImageDisplay";

const DealsCard = (props) => {
  const {
    id,
    couponCode,
    description,
    vendor,
    link,
    name,
    percentage,
    amount,
    dealIcon,
  } = props;

  return (
    <>
      <Card className="store-card" key={id}>
        <Card.Header className="px-4 py-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="store-logo">
                <ImageDisplay
                  src={`${process.env.REACT_APP_SERVER_URL}/${dealIcon}`}
                  className="store-logo"
                />
              </div>
              <h3 className="fs-5 d-sm-block d-none">{name}</h3>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="flex-wrap">
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">vendor</h6>
                <p>{vendor || ""}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">couponCode</h6>
                <p>{couponCode || ""}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Amount</h6>
                <p>{amount || 0}</p>
              </div>
            </Col>

            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">percentage</h6>
                <p>{percentage || 0}</p>
              </div>
            </Col>

            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">link</h6>
                <a href={link} target="_blank" rel="noreferrer">
                  Deal Link
                </a>
              </div>
            </Col>
            <Col sm="12" md="126" xxl="12" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">description</h6>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${id}`}>{description}</Tooltip>
                  }
                >
                  <p className="one-line-description">
                    {description.length > 100
                      ? `${description.slice(0, 100)}...`
                      : description}
                  </p>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

DealsCard.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  couponCode: PropTypes.string,
  description: PropTypes.string,
  vendor: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.any,
  percentage: PropTypes.any,
  dealIcon: PropTypes.string,
};
export default DealsCard;
