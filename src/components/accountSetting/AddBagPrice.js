import React from "react";
//import { Formik } from "formik";
import withAccountSettingLayout from "../../layout/AccountSettingLayout";
import withMainLayout from "../../layout/MainLayout";
import { Form, Col, Row, Button } from "react-bootstrap";
const AddBagPrice = () => {
  return (
    <div>
      <h3 className="font-24 font-weight-700 mb-5">Add Bag Price</h3>
      <Form>
        <Row className="align-items-start gap-sm-0">
          <Col xl="6" className="mb-2 col-sm-12 p-0 ps-0 pe-xl-4 mb-4">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Own Store Bag Price
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="AED 1.00"
              />
            </Form.Group>
          </Col>
          <Col xl="6" className="mb-2 col-sm-12 p-0 ps-0 pe-xl-4 mb-4">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Other Store Bag Price
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="AED 1.00"
              />
            </Form.Group>
          </Col>
          <Col xl="6" className="mb-2 col-sm-12 p-0 ps-0 pe-xl-4 mb-4">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2 text-capitalize font-weight-600">
                Max Redeem Limit
              </Form.Label>
              <Form.Control
                className="inputstyle"
                type="text"
                placeholder="AED 1.00"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4 gap-sm-0 gap-3">
          <Button type="submit" className="btn-green px-5 py-75">
            Send Request
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withMainLayout(withAccountSettingLayout(AddBagPrice));
