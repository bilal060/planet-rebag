import React, { useEffect, useState } from "react";
import BagIcon from "../../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../../assets/images/icons/dashboardicons/bottle";
import Radios from "../../components/Radios";
import { Col, Image, Row } from "react-bootstrap";
import StoreLogo from "../../assets/images/AppUserLogo.svg";
// import EditIcon from "../../assets/images/icons/dashboardicons/editIcon";
import AppUserTransactionsTable from "./AppUserTransactionsTable";
import AppUserItemsBagsTable from "./AppUserItemsBagsTable";
import Axios from "../../axios/Axios";
import { useParams } from "react-router-dom";
import Toast from "../../shared/Toast";
function AppUserDetailView() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    Axios.get(`user/${id}`, {
      withCredentials: true,
    })
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        Toast.error(error?.response?.data?.message);
      });
  }, [id]);
  console.log("userData");
  console.log(userData);
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
      {userData && (
        <div className="pb-2 mb-4">
          <div className="bg-white p-4 custom-bg position-relative">
            {/* <div className="d-flex justify-content-end position-absolute end-1 top-1 cr-p">
              <EditIcon />
            </div> */}
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
                      <h6>User Name</h6>
                      <span>{userData.name}</span>
                    </div>

                    <div>
                      <h6>Items Returned</h6>
                      <span>
                        {userData.scannedItems ? userData.scannedItems : 0}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <h6>User ID</h6>
                      <span>{userData._id.slice(0, 8)}</span>
                    </div>
                    <div>
                      <h6>Pending Return Items</h6>
                      <span>
                        {userData.scannedItems ? userData.scannedItems : 0}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <h6>Total Scanned Item</h6>
                      <span>
                        {userData.scannedItems ? userData.scannedItems : 0}
                      </span>
                    </div>
                    <div>
                      <h6>Status</h6>
                      <span>
                        {userData.verified === true ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                  <div></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
      <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <h4 className="fs-3">Transactions History </h4>
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
      <AppUserTransactionsTable />
      <AppUserItemsBagsTable />
      <AppUserItemsBagsTable />
    </div>
  );
}

export default AppUserDetailView;
