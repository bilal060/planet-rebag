import React, { useState } from "react";
import "../assets/css/itemcategory.css";
import Modal from "react-bootstrap/Modal";
import Radios from "../components/Radios";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import UploadIcon from "../assets/images/icons/dashboardicons/uploadIcon";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";

const ItemCategories = () => {
  const [modalShow, setModalShow] = useState(false);
  const [file, setFile] = useState(null);
  const [setAddCategory] = useState({
    categoryName: "",
    photo: "",
  });
  const [category, setCategory] = useState("All");
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
  const tableData = [
    {
      id: 1,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 3,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BottleIcon />,
      categoryName: "Bottle",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 1,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 3,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BottleIcon />,
      categoryName: "Bottle",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 1,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 3,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BottleIcon />,
      categoryName: "Bottle",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
    {
      id: 2,
      categoryIcon: <BagIcon />,
      categoryName: "Bag",
      noofStores: 5,
      time: "10:19 AM  |  23/07/2023",
    },
  ];
  //   const tableData = [
  //     {
  //       id: "1",
  //       itemType: "Bag",
  //       redeemPrice: "AED 1.00",
  //       bottleName: <AlainBottleIcon />,
  //       time: "10:19 AM  |  23/07/2023",
  //     },
  //     {
  //       id: "2",
  //       itemType: "Bag",
  //       redeemPrice: "AED 1.00",
  //       bottleName: <MusafiBottleIcon />,
  //       time: "10:19 AM  |  23/07/2023",
  //     },
  //     {
  //       id: "3",
  //       itemType: "Bag",
  //       redeemPrice: "AED 1.00",
  //       bottleName: <DubaiBottleIcon />,
  //       time: "10:19 AM  |  23/07/2023",
  //     },
  //   ];
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
  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-between gap-4 mb-4">
        <div className="d-flex align-items-center gap-lg-5 gap-4 flex-wrap">
          <div className="d-flex align-items-center justify-content-between hero-section-width">
            <h4 className="fs-3">All Categories </h4>
            <button
              className="green-btn-outline w-max-content d-lg-none d-flex"
              onClick={() => setModalShow(true)}
            >
              <AddNewCategoryIcon />
              <span className="d-sm-block d-none">Add New Category</span>
            </button>
          </div>

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
          className="green-btn-outline w-max-content d-lg-flex d-none"
          onClick={() => setModalShow(true)}
        >
          <AddNewCategoryIcon />
          <span className="d-sm-block d-none">Add New Category</span>
        </button>
      </div>
      <div className="table-main">
        <Table className="table-design" striped hover>
          <thead>
            <tr>
              <th>Category Icon</th>
              <th>Category Name</th>
              <th>No. of Stores</th>
              <th>Time & Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(tableData || []).map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.categoryIcon}</td>
                  <td>{data.categoryName}</td>
                  <td>{data.noofStores}</td>
                  <td>{data.time}</td>
                  <td>
                    <ThreeDotsIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
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
