import React, { useState } from "react";
import "../assets/css/itemcategory.css";
import Modal from "react-bootstrap/Modal";
import Radios from "../components/Radios";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import { Form } from "react-bootstrap";
import UploadIcon from "../assets/images/icons/dashboardicons/uploadIcon";

const ItemCategories = () => {
  const [modalShow, setModalShow] = useState(false);
  const [category, setCategory] = useState("All");
  const [file, setFile] = useState(null);
  const [addCategory, setAddCategory] = useState({
    categoryName: "",
    photo: "",
  });
  const radio = [
    {
      id: "1",
      text: "All",
    },
    {
      id: "2",
      imgSrc: <BagIcon />,
      text: "Bag",
    },
    {
      id: "3",
      imgSrc: <BottleIcon />,
      text: "Bottle",
    },
  ];
  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setAddCategory((prevState) => ({
        ...prevState,
        photo: Array.from(e.target.files),
      }));
      setFile(imageFile?.name);
    }
  };
  console.log(addCategory);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-5">
          <h4 className="fs-3">All Categories </h4>

          <div className="d-flex gap-3">
            {radio.map((data, index) => {
              return (
                <Radios
                  key={index}
                  data={data}
                  category={category}
                  setCategory={setCategory}
                />
              );
            })}
          </div>
        </div>
        <button
          className="green-btn-outline"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          Add New Category
        </button>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Categories
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-2">Category Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setAddCategory((prevState) => ({
                    ...prevState,
                    categoryName: e.target.value,
                  }))
                }
                className="inputstyle"
                type="text"
                placeholder="Enter category name"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mb-2">Upload Category Icon</Form.Label>
              <Form.Label className="upload-files">
                <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
                  <UploadIcon />
                  <p className="font-16 font-weight-500">
                    {file === null ? "Upload File" : file}
                  </p>
                </div>
                <Form.Control
                  onChange={(e) => attachFile(e)}
                  className="d-none"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="mt-5">
          <div className="d-flex flex-column w-100 gap-3">
            <button
              className="green-btn-outline"
              onClick={() => setModalShow(false)}
            >
              Cancel
            </button>
            <button className="green-btn" onClick={() => setModalShow(false)}>
              Add Store
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemCategories;
