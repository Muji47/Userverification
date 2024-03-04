import { Col, Row, Typography } from "antd";
import React from "react";
import Showimgdata from "./Showimgdata";

function Businesstype() {
  const { Title, Text } = Typography;
  const imageSize = {
    width: "100px",
    margin: "10px 0",
    borderRadius: "8px",
  };
  return (
    <div>
      <div className="verification">
        <Title>Select Business Type</Title>
        <Text>
          Select the best suited business type. This section will effect the
          default setting for your YAZO setup
        </Text>
        <Row style={{ margin: "30px 0" }}>
          <Col offset={2}>
            <Showimgdata
              src="./asset/coffeeshop.jpg"
              businessName="Coffe Cafe"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={2}>
            <Showimgdata
              src="./asset/pizzashop.jpg"
              businessName="Pizza Shop"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={2}>
            <Showimgdata
              src="./asset/truckshop.jpg"
              businessName="Food Truck"
              imageSize={imageSize}
            />
          </Col>
          <Col offset={2}>
            <Showimgdata
              src="./asset/juices&drinks.jpg"
              businessName="Juices & Drinks"
              imageSize={imageSize}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Businesstype;
