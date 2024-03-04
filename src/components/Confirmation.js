import { StarOutlined } from "@ant-design/icons";
import { Row, Col, Space, Typography } from "antd";
import React from "react";

function Confirmation() {
  const { Title, Text } = Typography;
  return (
    <div style={{ width: "85%", margin: "10px auto", textAlign: "left" }}>
      <div>
        <Space>
          <StarOutlined style={{ color: "#4BDC97", fontSize: "4rem" }} />
          <Title>Congratulation!</Title>
        </Space>
      </div>
      <div style={{ fontSize: "20px" }}>
        <Row>
          <Col>
            <Text>Dear [Customer Name],</Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Text>
              You have Successfully the complete the registration. Following are
              the details about how you may access the Yazo.
            </Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Text>
              Yazo URL:<Text strong>MEL24001.yazo.com</Text>
            </Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Text>
              Client / Company Name:<Text strong>Test Customer Name</Text>
            </Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Text>
              Client ID<Text strong>MEL24001</Text>
            </Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Text>
              User abdf@example.com,dghg2example.com, jshsj@exapmle.com
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text style={{ fontSize: "15px" }}>
              Complete details are sent via email to "customeradmin@gmail.com"
            </Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Confirmation;
