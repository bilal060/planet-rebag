import React, { useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import "../assets/css/detailcard.css";
import PropTypes from "prop-types";
import Radios from "./Radios";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTransactionsByStoreId,
  fetchUserTransactions,
} from "../store/storeIndex";
import moment from "moment";

function TransactionHistoryDetail({ pageType }) {
  const [category, setCategory] = useState("All");
  const { id } = useParams();
  const dispatch = useDispatch();
  let transactionData;

  if (pageType === "home") {
    transactionData = useSelector(
      (state) => state?.transaction?.userTransactions?.data,
    );
    useEffect(() => {
      dispatch(fetchUserTransactions(category));
    }, [dispatch, category, id, pageType]);
  } else if (pageType === "store") {
    transactionData = useSelector(
      (state) => state?.transaction?.userTransactionsByStoreId?.data,
    );
    useEffect(() => {
      dispatch(fetchUserTransactionsByStoreId(id, category));
    }, [dispatch, category, id, pageType]);
  }
  const radio = [
    {
      id: "1",
      text: "All",
    },
    {
      id: "2",
      imgSrc: <BagIcon />,
      text: "Bag",
    },
    {
      id: "3",
      imgSrc: <BottleIcon />,
      text: "Bottle",
    },
  ];
  return (
    <div>
      <Row className="justify-content-between pt-5">
        <Col className="p-0 d-flex align-items-center gap-5" lg="7" xl="8">
          <Row>
            <Col xl="8" className="mb-3 p-0">
              <h4 className="fs-3">Transactions History </h4>
            </Col>

            <Col xl="4 p-0">
              <div className="d-flex justify-content-start gap-3">
                {radio.map((data, index) => {
                  return (
                    <Radios
                      key={index}
                      data={data}
                      category={category}
                      setCategory={setCategory}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="p-0">
          <Form className="d-flex justify-content-start gap-2 flex-lg-row flex-column">
            <Form.Label className="d-flex justify-content-lg-end mt-2 w-100 font-weight-600">
              Select Store:
            </Form.Label>
            <Form.Select
              aria-label="Default drop-input select example"
              className="w-100 d-flex justify-content-end"
              defaultValue="all"
              // onChange={(e) => filterSpaceHandler(e.target.value)}
            >
              <option value="all">All Stores</option>
            </Form.Select>
          </Form>
        </Col>
      </Row>

      <div className="table-main mt-3">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Session ID</th>
              <th>Returned Bags</th>
              <th>Returned Bottles</th>
              <th>Total Qty</th>
              <th>Redeem Price</th>
              <th>Store Location</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactionData && transactionData?.length > 0 ? (
              (transactionData || []).map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.sessionId._id.slice(0, 8)}</td>
                    <td>{data.sessionId.returnBagsQty}</td>
                    <td>{data.sessionId.returnBottelsQty}</td>
                    <td>
                      {data.sessionId.returnBagsQty +
                        data.sessionId.returnBottelsQty}
                    </td>
                    <td>{data.sessionId.total}</td>
                    <td>
                      {data.storeId.address
                        ? data.storeId.address
                        : "no location"}
                    </td>
                    <td>
                      {moment(data.createdAt).format("h:mm A | DD/MM/YYYY")}
                    </td>
                    <td>{/* <ThreeDotsIcon /> */}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  NO DATA FOUND
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
TransactionHistoryDetail.propTypes = {
  pageType: PropTypes.string,
};

export default TransactionHistoryDetail;
