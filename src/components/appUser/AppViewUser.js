import React from "react";
import { Col, Row } from "react-bootstrap";
import UsersCard from "../UsersCard";
import UserIcon from "../../assets/images/icons/userIcon";
const AppViewUser = ({ UserData }) => {
  return (
    <>
      <Row className="m-0 stores-cards">
        {UserData.map((data, index) => {
          return (
            <Col xl="4" lg="6" md="12" className="mb-4 col" key={index}>
              <UsersCard
                userName={data.userName}
                userId={data.userId}
                scannedItems={data.scannedItems}
                status={data.status}
                btnText="View Profile"
                icon={<UserIcon />}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default AppViewUser;
