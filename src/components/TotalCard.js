import React from 'react'
import { Row } from 'react-bootstrap'
import TotalStore from "../assets/images/icons/Total Store.svg"

function TotalCard() {
  return (
    <div>
        <Row>
            <Col>
                <Image src={TotalStore}/>
            </Col>
            <Col>

            </Col>
        </Row>
    </div>
  )
}

export default TotalCard