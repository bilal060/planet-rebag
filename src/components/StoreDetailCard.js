import React, { useState } from "react";
import { Col, Form, Image, Row, Table } from "react-bootstrap";
import StoreLogo from "../assets/images/StoreLogo.svg";
import "../assets/css/detailcard.css";
import Radios from "./Radios";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";

function StoreDetailCard() {
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
      returnedBag: "7",
      returnedBottle: "7",
      TotalQty: "14",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      returnedBag: "20",
      returnedBottle: "20",
      TotalQty: "40",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: "CF783457",
      returnedBag: "13",
      returnedBottle: "13",
      TotalQty: "26",
      RedeemPrice: "AED 5.00",
      StoreLocation: "Al Ain, Abu Dhabi",
      time: "10:19 AM  |  23/07/2023",
    },
  ];

  return (
    <div>
      <div className="pb-2 mb-4">
        <div className="bg-white p-4 custom-bg">
          <Row className="align-items-center">
            <Col xl="2" className="p-0 mb-xl-0 mb-3">
              <span className="p- bg-greyDark">
                <Image src={StoreLogo} />
              </span>
            </Col>
            <Col xl="10" className="p-0">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-4">
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>Store Name</h6>
                    <span>Carrefour</span>
                  </div>

                  <div>
                    <h6>Items Returned</h6>
                    <span>1209</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>Store ID</h6>
                    <span>CF783457</span>
                  </div>
                  <div>
                    <h6>Total Redeem Price</h6>
                    <span>AED 5639.00</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>Total POS</h6>
                    <span>60</span>
                  </div>
                  <div>
                    <h6>Store Location</h6>
                    <span>Al Ain, Abu Dhabi</span>
                  </div>
                </div>
                <div className="d-flex flex-column pe-lg-5">
                  <div>
                    <h6>Total Sub Stores</h6>
                    <span>26</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
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
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.returnedBag}</td>
                  <td>{data.returnedBottle}</td>
                  <td>{data.TotalQty}</td>
                  <td>{data.RedeemPrice}</td>
                  <td>{data.StoreLocation}</td>
                  <td>{data.time}</td>
                  <td>{/* <ThreeDotsIcon /> */}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default StoreDetailCard;
