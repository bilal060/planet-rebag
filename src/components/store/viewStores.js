import React from "react";
import "../../assets/css/stores.css";
import StoresCard from "../StoresCard";
import { Col, Row } from "react-bootstrap";
import StoreLogo from "../../assets/images/icons/dashboardicons/storeLogo";
import PropTypes from "prop-types";

const ViewStores = ({ stores }) => {
  return (
    <Row className="m-0 stores-cards">
      {stores?.map((data, index) => {
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
  );
};
ViewStores.propTypes = {
  stores: PropTypes.array,
};
export default ViewStores;
