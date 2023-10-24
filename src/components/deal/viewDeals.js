import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import DealsCard from "./DealsCard";

const ViewDeals = ({ deals }) => {
  return (
    <Row className="m-0 deals-cards">
      {deals?.length === 0 ? (
        <Col xl="12" className="mb-4 col">
          <div className="d-flex justify-content-center align-content-center border border-lg p-5">
            <h4 className="fs-3 ">No Deals Available</h4>
          </div>
        </Col>
      ) : (
        <>
          {deals?.map((data, index) => {
            return (
              <Col
                xl={4}
                md={6}
                lg={6}
                sm={12}
                xs={12}
                className="mb-4 col"
                key={index}
              >
                <DealsCard
                  id={data._id}
                  couponCode={data.couponCode}
                  description={data.description}
                  vendor={data.vendor}
                  link={data.link}
                  name={data.name}
                  percentage={data.percentage}
                  amount={data.amount}
                  dealIcon={data.image}
                />
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
};
ViewDeals.propTypes = {
  deals: PropTypes.array,
};
export default ViewDeals;
