import React, { useState } from "react";
import TotalCard from "../components/TotalCard";
import "../assets/css/itemcategory.css";

import Radios from "../components/Radios";
import { Col, Form, Row, Table } from "react-bootstrap";
import TotalItemsIcon from "../assets/images/icons/TotalItems";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import TotalBottles from "../assets/images/icons/TotalBottles";
import TotalStore from "../assets/images/icons/TotalStore";
import TotalPrice from "../assets/images/icons/TotalPrice";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";

function TransactionHistory() {
  const [category, setCategory] = useState("All");

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
  const tableData = [
    {
      id: "CF783457",
      itemType: "Bag",
      returnedQuantity: "7",
      totalQty: "14",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      itemType: "Bottle",
      returnedQuantity: "20",
      totalQty: "40",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      itemType: "Bag",
      returnedQuantity: "13",
      totalQty: "26",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
  ];

  return (
    <div>
      <div className="total-cards">
        <Row>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalItemsIcon />}
              value="2392"
              title="Transactions History"
              classes="bg-light-green"
              text="font-weight-700 cut-text text-green"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalBottles />}
              value="3492"
              title="Transactions History"
              classes="bg-light-blue"
              text="font-weight-700 cut-text text-blue"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalStore />}
              value="65"
              title="Total Stores"
              classes="bg-light-orange"
              text="font-weight-700 cut-text text-orange"
            />
          </Col>
          <Col sm="12" md="12" lg="6" xl="3" className="p-0">
            <TotalCard
              icon={<TotalPrice />}
              value="AED 3492.50"
              title="Total Redeem Price"
              classes="bg-light-cyan"
              text="font-weight-700 cut-text text-cyan"
            />
          </Col>
        </Row>
      </div>

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

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Returned Qty</th>
              <th>Total Qty</th>
              <th>Redeem Price</th>
              <th>Store Location</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.itemType}</td>
                  <td>{data.returnedQuantity}</td>
                  <td>{data.totalQty}</td>
                  <td>{data.RedeemPrice}</td>
                  <td>{data.StoreLocation}</td>
                  <td>{data.time}</td>
                  <td>
                    <ThreeDotsIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionHistory;
