import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../assets/css/totalcard.css";

function TotalCard(props) {
  return (
    <>
      <Row className={`${props.class} p-4 total-card w-100`}>
        <Col sm="3" md="3" lg="3" xl="3">
          <Image src={props.icon} />
        </Col>
        <Col>
          <h4>{props.value}</h4>
          <p>{props.title}</p>
        </Col>
      </Row>
    </>
  );
}

export default TotalCard;
