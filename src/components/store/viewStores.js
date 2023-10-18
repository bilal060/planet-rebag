import React from "react";
import "../../assets/css/stores.css";
import StoresCard from "../StoresCard";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const ViewStores = ({ stores }) => {
  return (
    <Row className="m-0 stores-cards">
      {stores && stores?.length === 0 ? (
        <Col xl="12" className="mb-4 col">
          <div className="d-flex justify-content-center align-content-center border border-lg p-5">
            <h4 className="fs-3 ">No Stores Available</h4>
          </div>
        </Col>
      ) : (
        <>
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
                  storeIcon={data.image}
                  btnText="View Store"
                  storeType={data.storeType}
                />
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
};
ViewStores.propTypes = {
  stores: PropTypes.array,
};
export default ViewStores;
