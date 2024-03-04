import React from "react";
import { Row, Col } from "antd";
import Showimgdata from "./Showimgdata";

function FoodStep() {
  const imageSize = {
    width: "160px",
    height: "120px",
    margin: "10px 0",
    borderRadius:"8px"
  };
  const lowerImage = {
    width: "210px",
    height: "120px",
    margin: "15px 0",
    borderRadius:"8px"
  };
  return (
    <div>
      <div className="verification" style={{ width: "60%" }}>
        <Row>
          <Col offset={1}>
            <Showimgdata
              src="./asset/coffee.jpg"
              businessName="Coffe Setup"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={1}>
            <Showimgdata
              src="./asset/pizza.jpg"
              businessName="Pizza Setup"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={1}>
            <Showimgdata
              src="./asset/ice&juice.jpg"
              businessName="Ice & Juices Setup"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={1}>
            <Showimgdata
              src="./asset/southindianfood.jpg"
              businessName="South Indian Food"
              imageSize={imageSize}
            />
          </Col>
        </Row>
        <Row style={{ margin: "20px 0" }}>
          <Col offset={1}>
            <Showimgdata
              src="./asset/turkishfood.jpg"
              businessName="Turkish Food"
              imageSize={lowerImage}
            />
          </Col>
          <Col offset={2}>
            <Showimgdata
              src="./asset/bakery.jpg"
              businessName="Bread & Bakery"
              imageSize={lowerImage}
            />
          </Col>
          <Col offset={2}>
            <Showimgdata
              src="./asset/drive&thru.jpg"
              businessName="Drive Thru Cafe"
              imageSize={lowerImage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FoodStep;
