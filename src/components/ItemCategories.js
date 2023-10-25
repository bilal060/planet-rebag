import React, { useEffect, useState } from "react";
import "../assets/css/itemcategory.css";
import Modal from "react-bootstrap/Modal";
import Radios from "../components/Radios";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import AddNewCategoryIcon from "../assets/images/icons/dashboardicons/addNewCategory";
import { Form, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import UploadIcon from "../assets/images/icons/dashboardicons/uploadIcon";
import { fetchAllCategories, addCategories } from "../store/storeIndex";
import ThreeDotsIcon from "../assets/images/icons/dashboardicons/threeDots";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ImageDisplay from "../shared/ImageDisplay";
const ItemCategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [addCategory, setAddCategory] = useState({
    categoryName: "",
    photo: "",
  });
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const categoryData = useSelector(
    (state) => state?.category?.categories?.data,
  );
  useEffect(() => {
    dispatch(fetchAllCategories(category));
  }, [dispatch, category]);

  const addcatHandler = () => {
    const data = new FormData();
    data.append("name", addCategory.categoryName);
    data.append("image", addCategory.photo);
    dispatch(addCategories(data, setModalShow));
  };
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
        photo: imageFile,
      }));
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
            {categoryData?.length > 0 ? (
              (categoryData || []).map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <ImageDisplay
                        src={`${process.env.REACT_APP_SERVER_URL}/${data?.image}`}
                        className="store-logo"
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.noofStores ? data.noofStores : 0}</td>
                    <td>
                      {moment(data.createdAt).format("h:mm A | DD/MM/YYYY")}
                    </td>
                    <td>
                      <ThreeDotsIcon />
                    </td>
                  </tr>
                );
              })
            ) : (
              <Col xl="12" className="mb-4 col">
                <div className="d-flex justify-content-center align-content-center border border-lg p-5">
                  <h4 className="fs-3 ">No Category Available</h4>
                </div>
              </Col>
            )}
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
                    {addCategory?.photo?.name === null
                      ? "Upload File"
                      : addCategory?.photo?.name}
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
            <button className="green-btn" onClick={addcatHandler}>
              Add Store
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemCategory;
