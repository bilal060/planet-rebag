import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../assets/css/totalcard.css";

function TotalCard(props) {

    const {
        classes,
        icon,
        value,
        text,
        title,
      } = props;

  return (
    <div className='w-100'>
        <div className='p-2'>
        <Row className={`${classes} p-3 total-card justify-content-center`}>
            <Col sm="12" md="3" lg="3" xl="3">
                <Image src={icon}/>
            </Col>
            <Col>
                <h4 className={`${text}`}>{value}</h4>
                <p>{title}</p>
            </Col>
        </Row>
        </div>
    </div>
  )

}

export default TotalCard;
