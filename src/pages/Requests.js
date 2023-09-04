import React from "react";
import "../assets/css/itemcategory.css";

import { Table } from "react-bootstrap";
import DubaiBottleIcon from "../assets/images/icons/dashboardicons/dubaiBottleIcon";
import MusafiBottleIcon from "../assets/images/icons/dashboardicons/musafiBottle";
import AlainBottleIcon from "../assets/images/icons/dashboardicons/alainBottle";
import TickIcon from "../assets/images/icons/dashboardicons/tickIcon";
import CrossIcon from "../assets/images/icons/dashboardicons/crossIcon";
import withMainLayout from "../layout/MainLayout";

const tableData = [
  {
    id: "1",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <AlainBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "2",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <MusafiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "3",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <DubaiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "4",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <AlainBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "5",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <MusafiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "6",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <DubaiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "7",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <AlainBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "8",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <MusafiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "9",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <DubaiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
  {
    id: "9",
    currentOwnBagPrice: "AED 1.00",
    currentOtherBagPrice: "AED 1.00",
    newOwnBagPrice: "AED 1.00",
    newOtherBagPrice: "AED 1.00",
    store: <DubaiBottleIcon />,
    storeLocation: "Al Ain, Abu Dhabi",
  },
];
function Requests() {
  return (
    <div>
      <h4 className="fs-3">Price Change Requests</h4>

      <div className="table-main mt-4">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Store</th>
              <th>
                Current Own <br /> Bag Price
              </th>
              <th>
                Current Other
                <br /> Bag Price
              </th>
              <th>
                New Own <br /> Bag Price
              </th>
              <th>
                New Other
                <br /> Bag Price
              </th>
              <th>Store Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.store}</td>
                  <td>{data.currentOwnBagPrice}</td>
                  <td>{data.currentOtherBagPrice}</td>
                  <td>{data.newOwnBagPrice}</td>
                  <td>{data.newOtherBagPrice}</td>
                  <td>{data.storeLocation}</td>
                  <td className="d-flex align-items-center gap-3">
                    <span className="cr-p">
                      <TickIcon />
                    </span>
                    <span className="cr-p">
                      <CrossIcon />
                    </span>
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

export default withMainLayout(Requests);
