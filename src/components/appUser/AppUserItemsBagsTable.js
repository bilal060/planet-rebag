import React from "react";
import { Table } from "react-bootstrap";
import ThreeDotsIcon from "../../assets/images/icons/dashboardicons/threeDots";
import AlainBottleIcon from "../../assets/images/icons/dashboardicons/alainBottle";
import DubaiBottleIcon from "../../assets/images/icons/dashboardicons/dubaiBottleIcon";
import MusafiBottleIcon from "../../assets/images/icons/dashboardicons/musafiBottle";

const AppUserItemsBagsTable = () => {
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
  );
};

export default AppUserItemsBagsTable;
