import { ToTopOutlined,CaretDownOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col,Select, Button, Upload, Form} from "antd";
import React, { useState } from "react";
import "../style.css";
import InputField from "./InputField";

function CompanyInfo() {

  const [checkedValue, setCheckedValue] = useState(null);

  const onChange = (e) => {
    setCheckedValue(e.target.checked ? e.target.value : null);
  };
  const adjustInput = {
    borderRadius: "10px",
  };
  const options = [
    {
      label:"Australia"
    },
    {
      label:"India"
    },
    {
      label:"Pakistan"
    },
    {
      label:"Iraq"
    }
  ];
  const position2={
    position:"absolute",
    bottom:"10px",
    right:"10px"
  }

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Form>
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
          <Form.Item name="Company Name" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField placeholder="Company Name" style={adjustInput} className="inputData" />
    </Form.Item>
    <Form.Item name="Company Person Name" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField
            placeholder="Company Person Name"
            size="large"
            style={adjustInput}
            allowClear
            className="inputData"
          />
          </Form.Item>
        </Col>
        <Col
          span={3}
          offset={15}
          style={{
            cursor:"pointer",
          }}
        >
          <Upload maxCount={1} listType="picture">
          <ToTopOutlined
            style={{
              fontSize: "6rem",
              color: "white",
              backgroundColor: "#8920aa",
              borderRadius:"10px",
              display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
          />
          Upload Company Logo
          </Upload>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={6} md={8} lg={10}>
        <Form.Item name="Email" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField placeholder="Email" style={adjustInput} className="inputData" type={"email"}/></Form.Item>
        </Col>
        <Col xs={4} sm={6} md={8} lg={10} offset={4}>
        <Form.Item name="Phone" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField placeholder="Phone" style={adjustInput} className="inputData" type={"number"}/></Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Form.Item name="Address 1" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField placeholder="Address 1" style={adjustInput} className="inputData"/></Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Form.Item name="Address 2" rules={[{ required: true, message: 'Please input!' }]}>
          <InputField placeholder="Address 2" style={adjustInput} className="inputData"/></Form.Item>
        </Col>
      </Row>
      <Row>
    <Col xs={{ span: 5}} lg={{ span: 6}}>
    <Form.Item name="City" rules={[{ required: true, message: 'Please input!' }]}>
    <InputField placeholder="City" style={adjustInput} className="inputData"/></Form.Item>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 3 }}>
    <Form.Item name="Zip Code" rules={[{ required: true, message: 'Please input!' }]}>
    <InputField placeholder="Zip code" style={adjustInput} className="inputData"/></Form.Item>
    </Col>
    <Col lg={{ span: 6, offset: 3 }}>
    <Select
    className="inputData"
          size={"large"}
          defaultValue="Australia"
          style={{
            width: 280,
          }}
          options={options}
          dropdownClassName="custom-dropdown"
          
        />
    </Col>
  </Row>
  <Button className='page-btn' style={position2} htmlType='submit'>Save & Next</Button>
  </Form>
    </div>
  );
}

export default CompanyInfo;
