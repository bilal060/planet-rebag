import React from "react";
import "../assets/css/forgetpassword.css";
import right_circle from "../assets/images/right-circle.svg";
import left_circle from "../assets/images/left-circle.svg";
import Logo from "../assets/images/Logo.svg" 
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ForgetPassword() {
  return (
    <>
      <div>
        <img
          src={left_circle}
          alt=""
          className="circle-container2 circle-left"
        />
      </div>
      <div>
        <img
          src={right_circle}
          alt=""
          className="circle-container1 circle-right"
        />
      </div>
      <div>
        <img
          src={Logo}
          alt=""
          className="logo-container logo"
        />
      </div>

      <div className="login-container">
        {/* <h2 className="text-center">Login</h2> */}
        <div className="login-sub w-custom">
          <span className="mb-5">
            <h3 className="d-flex justify-content-center green-text fw-bold mt-3">
              Forgot Password?
            </h3>
            <span className="logo-text d-flex justify-content-center mt-2">
              Enter your associated with your account and we’ll send an email
              with instruction to reset your password.
            </span>
          </span>

          <div className="login-btn mt-5">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Form>
            <Button className="bg-primary-green text-white border border-success w-100 mt-3">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
