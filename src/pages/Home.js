import React, { useState } from "react";
import TotalCard from "../components/TotalCard";
import TotalItems from "../assets/images/icons/Total Items.svg";
import TotalUsers from "../assets/images/icons/Total user.svg";
import TotalStore from "../assets/images/icons/Total Store.svg";
import TotalPrice from "../assets/images/icons/Total Price.svg";
import BagIcon from "../assets/images/icons/dashboardicons/bag";
import BottleIcon from "../assets/images/icons/dashboardicons/bottle";
import Radios from "../components/Radios";
import { Form } from "react-bootstrap";

function Home() {
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
    <div>
      <div className="total-cards d-flex justify-content-between">
        <TotalCard
          icon={TotalItems}
          value="2392"
          title="Total Items Returned"
          class="bg-light-green"
        />
        <TotalCard
          icon={TotalUsers}
          value="3492"
          title="Total App Users"
          class="bg-light-blue"
        />
        <TotalCard
          icon={TotalStore}
          value="65"
          title="Total Stores"
          class="bg-light-orange"
        />
        <TotalCard
          icon={TotalPrice}
          value="AED 3492.50"
          title="Total Redeem Price"
          class="bg-light-cyan"
        />
      </div>
      <div className="d-flex justify-content-between pt-5">
        <div className="d-flex align-items-center gap-5 ">
          <h4 className="fs-3">Transactions History </h4>
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
        <div className="w-25">
          <Form className="d-flex justify-content-start">
          <Form.Label className="d-flex justify-content-center w-100 mt-2 gap-2">Select Store:</Form.Label>
          <Form.Select
            aria-label="Default drop-input select example"
            className="w-100 d-flex justify-content-end"
            defaultValue="all"
            // onChange={(e) => filterSpaceHandler(e.target.value)}
          >
            <option value="all">All Stores</option>
          </Form.Select>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
