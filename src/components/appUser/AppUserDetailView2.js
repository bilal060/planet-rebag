import React, { useState } from "react";
import BagIcon from "../../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../../assets/images/icons/dashboardicons/bottle";
import Radios from "../Radios";
import { Col, Image, Row, Table } from "react-bootstrap";
import StoreLogo from "../../assets/images/AppUserLogo.svg";
import withMainLayout from "../../layout/MainLayout";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";
import AlainBottleIcon from "../../assets/images/icons/dashboardicons/alainBottle";
import DubaiBottleIcon from "../../assets/images/icons/dashboardicons/dubaiBottleIcon";
import MusafiBottleIcon from "../../assets/images/icons/dashboardicons/musafiBottle";

function AppUserDetailView2() {
  const [category, setCategory] = useState("Bag");

  const radio = [
    {
      id: "1",
      imgSrc: <BagIcon />,
      text: "Bag",
    },
    {
      id: "2",
      imgSrc: <BottleIcon />,
      text: "Bottle",
    },
  ];
  const tableData = [
    {
      itemType: "Bag",
      RedeemPrice: "AED 5.00",
      bagName: <AlainBottleIcon />,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bottle",
      RedeemPrice: "AED 5.00",
      bagName: <DubaiBottleIcon />,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bag",
      RedeemPrice: "AED 5.00",
      bagName: <MusafiBottleIcon />,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bottle",
      RedeemPrice: "AED 5.00",
      bagName: <DubaiBottleIcon />,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      itemType: "Bag",
      RedeemPrice: "AED 5.00",
      bagName: <MusafiBottleIcon />,
      time: "10:19 AM  |  23/07/2023",
    },
  ];

  return (
    <div>
      <div className="pb-2 mb-4">
        <div className="bg-white p-4 custom-bg">
          <Row className="align-items-center">
            <Col xl="2" className="ps-0 mb-xl-0 mb-3">
              <span className="w-100 bg-greyDark">
                <Image src={StoreLogo} className="w-xl-100" />
              </span>
            </Col>
            <Col xl="10" className="p-0">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-4">
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>User Name</h6>
                    <span>Jakob Vetrovs</span>
                  </div>

                  <div>
                    <h6>Items Returned</h6>
                    <span>Jakob Vetrovs</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>User ID</h6>
                    <span>CF783457</span>
                  </div>
                  <div>
                    <h6>Session ID</h6>
                    <span>CF783457</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <h6>Status</h6>
                    <span>Redeemed</span>
                  </div>
                  <div>
                    <h6>Store Location</h6>
                    <span>Al Ain, Abu Dhabi</span>
                  </div>
                </div>
                <div className="d-flex flex-column pe-lg-5">
                  <div>
                    <h6>Total Cashback</h6>
                    <span>AED 5.00</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <h4 className="fs-3">Redeemed Items Details</h4>
        <div className="d-flex gap-3">
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
      </div>

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Redeem Price</th>
              <th>Bag Name</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.itemType}</td>
                  <td>{data.RedeemPrice}</td>
                  <td>{data.bagName}</td>
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

export default withMainLayout(AppUserDetailView2);
