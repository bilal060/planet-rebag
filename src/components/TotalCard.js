import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import "../assets/css/totalcard.css"


function TotalCard(props) {
  return (
    <div>
        <Row className={`${props.class} p-3 total-card`}>
            <Col sm="3" md="3" lg="3" xl="3">
                <Image src={props.icon}/>
            </Col>
            <Col>
                <h4>{props.value}</h4>
                <p>{props.title}</p>
            </Col>
        </Row>
    </div>
  )
}

export default TotalCard