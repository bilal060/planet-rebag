import React, { useState } from "react";
import SideBarNav from "../shared/SideBarNav";
import "../assets/css/layout.css";
import userimage from "../assets/images/icons/dashboardicons/userimage.png";
import { useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../assets/images/icons/BackIcon";
import AddIcon from "../assets/images/icons/AddIcon";
import { Modal } from "react-bootstrap";

const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const location = useLocation();
    const heroMessage = ["/home"];
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);

    return (
      <div className="main-layout">
        <SideBarNav />
        <main className="main-container">
          <div>
            <div
              className={`d-flex ${
                heroMessage.includes(location.pathname) ||
                location.pathname.includes("detail")
                  ? "justify-content-between"
                  : "justify-content-end"
              } mb-5 pb-3`}
            >
              {heroMessage.includes(location.pathname) && (
                <>
                  <div>
                    <h1>Welcome, Tony!</h1>
                  </div>
                  <button
                    className="green-btn w-max-content d-flex"
                    onClick={() => setModalShow(true)}
                  >
                    <AddIcon />
                    <span className="d-sm-block font-weight-600 d-none">
                      Register Bag
                    </span>
                  </button>
                </>
              )}

              {location.pathname.includes("detail") && (
                <button
                  className="green-btn-outline text-dark align-items-center"
                  onClick={() => navigate(-1)}
                >
                  <BackIcon />
                  Back
                </button>
              )}
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Register Bag
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mb-5">
                  {/* <form action="">
                    <div className="d-flex flex-column gap-2">
                      <label htmlFor="">Category Name</label>
                      <input
                        className="inputstyle border-0"
                        type="text"
                        placeholder="Enter category name"
                      />
                    </div>
                  </form> */}
                </Modal.Body>
                <Modal.Footer className="mt-5">
                  <div className="d-flex flex-column w-100 gap-3">
                    <button
                      className="green-btn"
                      onClick={() => setModalShow(false)}
                    >
                      Confirm Count
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
              <div className="d-flex align-items-center gap-2">
                <div>
                  <h4 className="fs-5">Tony Stark</h4>
                  <p className="fs-6">Super Admin</p>
                </div>
                <img src={userimage} alt="userimage" className="userimage" />
              </div>
            </div>
            <WrappedComponent {...props} />
          </div>
        </main>
      </div>
    );
  };
};

export default withMainLayout;
