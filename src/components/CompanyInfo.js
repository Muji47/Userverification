import { ToTopOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col, Typography,Select, Button} from "antd";
import React, { useState } from "react";
import "../style.css";
import InputField from "./InputField";

function CompanyInfo() {

    const {Option}=Select
  const [checkedValue, setCheckedValue] = useState(null);

  const onChange = (e) => {
    setCheckedValue(e.target.checked ? e.target.value : null);
  };
  const adjustInput = {
    margin: "5px 0",
    borderRadius: "10px",
  };

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row>
        <Col span={6}>
          <Checkbox
            value="Company"
            checked={checkedValue === "Company"}
            onChange={onChange}
            size="large"
            className="custom-checkbox"
          >
            Company
          </Checkbox>
          <Checkbox
            value="Individual"
            checked={checkedValue === "Individual"}
            onChange={onChange}
            size="large"
            className="custom-checkbox"
          >
            Individual
          </Checkbox>
          <InputField placeholder="Company Name" style={adjustInput} className="inputData" />
          <InputField
            placeholder="Company Person Name"
            size="large"
            style={adjustInput}
            allowClear
            className="inputData"
          />
        </Col>
        <Col
          span={3}
          offset={15}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#8920aa",
            borderRadius:"10px",
          }}
        >
          <ToTopOutlined
            style={{
              fontSize: "5rem",
              color: "white",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={6} md={8} lg={10}>
          <InputField placeholder="Email" style={adjustInput} className="inputData"/>
        </Col>
        <Col xs={4} sm={6} md={8} lg={10} offset={4}>
          <InputField placeholder="Phone" style={adjustInput} className="inputData"/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InputField placeholder="Address 1" style={adjustInput} className="inputData"/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InputField placeholder="Address 2" style={adjustInput} className="inputData"/>
        </Col>
      </Row>
      <Row>
    <Col xs={{ span: 5}} lg={{ span: 6}}>
    <InputField placeholder="City" style={adjustInput} className="inputData"/>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 3 }}>
    <InputField placeholder="Zip code" style={adjustInput} className="inputData"/>
    </Col>
    <Col lg={{ span: 6, offset: 3 }}>
    <Select
        style={{width:"100%",
        borderRadius: "10px",
        margin: "5px 0",
    }}
        size="large"
        className="inputData"
      >
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
    </Col>
  </Row>
  <Button className="page-btn">Save & Next</Button>
    </div>
  );
}

export default CompanyInfo;
