import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StoreLogo from "../assets/images/icons/dashboardicons/storeLogo";

const StoresCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
              <Card.Header>
                  <StoreLogo/>
          <button className="green-btn height-32px rounded-8px py-2 px-3">
            View Store
          </button>
        </Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoresCard;
