import React, { useState } from "react";
import SideBarNav from "../shared/SideBarNav";
import "../assets/css/layout.css";
import userimage from "../assets/images/icons/dashboardicons/userimage.png";
import { useLocation, useNavigate } from "react-router-dom";
import BackIcon from "../assets/images/icons/BackIcon";
// import AddIcon from "../assets/images/icons/AddIcon";
import { Modal } from "react-bootstrap";
import bags from "../assets/images/bags.svg";
import camera from "../assets/images/camera.svg";
import Counter from "../components/Counter";
import thanks_icon from "../assets/images/thanks.svg";
import { userLogout } from "../store/storeIndex";
import { useDispatch, useSelector } from "react-redux";
const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const isUserLogin = useSelector((users) => {
      return users?.user?.isLogin;
    });
    const { role, name } = useSelector((users) => {
      return users?.user?.user?.user || {};
    });

    const location = useLocation();
    const heroMessage = ["/home"];
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [thankYouModalShow, setThankYouModalShow] = useState(false);
    const [uniqueIDModalShow, setUniqueIDModalShow] = useState(false);
    const dispatch = useDispatch();
    const handleConfirmCount = () => {
      setModalShow(false);
      setUniqueIDModalShow(true);
    };

    const handleUniqueIDSubmit = () => {
      setUniqueIDModalShow(false);
      setThankYouModalShow(true);
    };
    const [subStoreModalShow, setSubStoreModalShow] = useState(false);

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
                    <h1>Welcome, {name || ""}!</h1>
                  </div>
                  {/* <button
                    className="green-btn w-max-content d-flex"
                    onClick={() => setModalShow(true)}
                  >
                    <AddIcon />
                    <span className="d-sm-block font-weight-600 d-none">
                      Register Bag
                    </span>
                  </button> 
                   <button
                    className="green-btn w-max-content d-flex"
                    onClick={() => setSubStoreModalShow(true)}
                  >
                    <AddIcon />
                    <span className="d-sm-block font-weight-600 d-none">
                      SubStore Modal (customer unique id)
                    </span>
                  </button> */}
                </>
              )}

              <Modal
                show={subStoreModalShow}
                onHide={() => setSubStoreModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Scan Code
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mb-3">
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
                  <div className="d-flex w-100 gap-2 justify-content-around">
                    <div className="w-60">
                      <span className="font-weight-bold font-14">
                        Customer Unique ID
                      </span>
                      <input
                        className="inputstyle border-0"
                        type="text"
                        placeholder="Enter customer unique id"
                      />
                    </div>
                    <div className="w-40 text-u">
                      <button
                        className="green-btn"
                        onClick={() => setSubStoreModalShow(false)}
                      >
                        Confirm Count
                      </button>
                    </div>
                  </div>
                </Modal.Footer>
              </Modal>

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
                <Modal.Body className="mb-2">
                  <div className="d-flex gap-2">
                    <div className="p-2 d-flex w-50 justify-content-center bage-count p-3">
                      <img src={bags} alt="Logo" />
                      <p className="bags-text ps-3 pt-1"> +1</p>
                    </div>
                    <div className="p-2 d-flex flex-fill w-50 justify-content-center camera-count p-3">
                      <img src={camera} alt="Logo" />
                      <p className="camera-text ps-3 pt-1">+1</p>
                    </div>
                  </div>
                  <div className="counter-wraper mt-4">
                    <div className="labels">
                      <p className="label pb-1">Supermarket Bags</p>
                    </div>
                    <Counter />
                  </div>
                  <div className="counter-wraper mt-4">
                    <div className="labels">
                      <p className="label pb-1">Other bags</p>
                    </div>
                    <Counter />
                  </div>
                </Modal.Body>
                <Modal.Footer className="mt-0">
                  <div className="d-flex flex-column w-100 gap-3">
                    <button className="green-btn" onClick={handleConfirmCount}>
                      Confirm Count
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
              <Modal
                show={uniqueIDModalShow}
                onHide={() => setUniqueIDModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Scan Code
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="curency-icons d-flex">
                      <span>icon</span>
                    </div>
                    <div className="times">Hello</div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="d-flex flex-column w-100 gap-3">
                    <button
                      className="green-btn"
                      onClick={handleUniqueIDSubmit}
                    >
                      Confirm Count
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
              <Modal
                show={thankYouModalShow}
                onHide={() => setThankYouModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex flex-column w-100 gap-3 justify-content-center align-items-center">
                    <img
                      src={thanks_icon}
                      alt="tanks-logo"
                      className="thanks-icon"
                    />
                    <p className="tahnks-text">Thank You!</p>
                    <span className="iner-text">
                      Customer returned 12 bags and earned 10 AED
                    </span>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="d-flex flex-column w-100 gap-3">
                    <button
                      className="green-btn"
                      onClick={() => setThankYouModalShow(false)}
                    >
                      Go To Home
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
              {isUserLogin && (
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <h4 className="fs-5">{name || ""}</h4>
                    <p className="fs-6">{role || ""}</p>
                    <p
                      onClick={() => dispatch(userLogout(navigate))}
                      className="d-flex justify-content-end text-muted btn-link"
                    >
                      Logout
                    </p>
                  </div>
                  <img src={userimage} alt="userimage" className="userimage" />
                </div>
              )}
            </div>
            <WrappedComponent {...props} />
          </div>
        </main>
      </div>
    );
  };
};

export default withMainLayout;
