import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../assets/css/totalcard.css";

function TotalCard(props) {
  return (
    <div className='w-100'>
        <div className='p-2'>
        <Row className={`${props.class} p-3 total-card justify-content-center`}>
            <Col sm="12" md="3" lg="3" xl="3">
                <Image src={props.icon}/>
            </Col>
            <Col>
                <h4 className={`${props.text}`}>{props.value}</h4>
                <p>{props.title}</p>
            </Col>
        </Row>
        </div>
    </div>
  )

}

export default TotalCard;
