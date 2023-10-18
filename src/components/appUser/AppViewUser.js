import React from "react";
import { Col, Row } from "react-bootstrap";
import UsersCard from "../UsersCard";
import UserIcon from "../../assets/images/icons/userIcon";
import PropTypes from "prop-types";
const AppViewUser = ({ UserData }) => {
  return (
    <>
      <Row className="m-0 stores-cards">
        {UserData.map((data, index) => {
          return (
            <Col xl="4" lg="6" md="12" className="mb-4 col" key={index}>
              <UsersCard
                id={data._id}
                userName={data.name}
                userId={data._id.slice(0, 8)}
                scannedItems={data.scannedItems ? data.scannedItems : 0}
                status={data.verified === true ? "Active" : "Inactive"}
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
AppViewUser.propTypes = {
  UserData: PropTypes.array,
};
export default AppViewUser;
