import React from "react";
import Card from "react-bootstrap/Card";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";
import { Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ImageDisplay from "../shared/ImageDisplay";
import { useDispatch } from "react-redux";
import { updateStoreIsActive } from "../store/store/actions/actionCreators";
import { SET_STORE_IS_EDITING } from "../store/store/actions/actionTypes";

const StoresCard = (props) => {
  const navigate = useNavigate();
  const {
    id,
    storeName,
    storeId,
    itemsReturned,
    totalRedeemPrice,
    numberOfPos,
    storeLocation,
    btnText,
    storeIcon,
    storeType,
    isActive,
  } = props;
  const dispatch = useDispatch();

  const handleUpdateIsActive = (isActive) => {
    dispatch(updateStoreIsActive(id, isActive));
  };

  const handleEditStore = () => {
    dispatch({
      type: SET_STORE_IS_EDITING,
      payload: { storeId: id, isEditing: true },
    });
  };

  return (
    <>
      <Card className="store-card" key={id}>
        <Card.Header className="px-4 py-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="store-logo">
                <ImageDisplay
                  src={`${process.env.REACT_APP_SERVER_URL}/${storeIcon}`}
                  className="store-logo"
                />
              </div>
              <h3 className="fs-5 d-sm-block d-none">{storeName}</h3>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => navigate(`/stores/detail/${id}`)}
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
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Store ID</h6>
                <p>{storeId}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Items Returned</h6>
                <p>{itemsReturned || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Total Redeem Price</h6>
                <p>{totalRedeemPrice || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">No. of POS</h6>
                <p>{numberOfPos || 0}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Store Location</h6>
                <p>{storeLocation}</p>
              </div>
            </Col>
            <Col sm="4" md="6" xxl="4" className="p-0">
              <div className="mb-4">
                <h6 className="mb-2 font-weight-700">Store Type</h6>
                <p>{storeType}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="px-4 py-3 bg-white d-flex justify-content-between">
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Available"
              checked={isActive}
              onChange={(e) => handleUpdateIsActive(e.target.checked)}
              className="d-flex align-items-center gap-2 p-0 font-weight-700"
            />
          </Form>
          <i
            className="fas fa-edit text-muted"
            onClick={() => handleEditStore()}
          ></i>
        </Card.Footer>
      </Card>
    </>
  );
};

StoresCard.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
  storeName: PropTypes.any,
  storeId: PropTypes.any,
  itemsReturned: PropTypes.any,
  totalRedeemPrice: PropTypes.any,
  numberOfPos: PropTypes.any,
  storeLocation: PropTypes.any,
  btnText: PropTypes.any,
  storeIcon: PropTypes.any,
  storeType: PropTypes.any,
  isActive: PropTypes.bool,
};
export default StoresCard;
