import { ToTopOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col, Select, Button, Upload, Form,Input } from "antd";
import React, { useState } from "react";
import "../style.css";

function CompanyInfo({onFinish}) {
  const [checkedValue, setCheckedValue] = useState(null);

  const onChange = (e) => {
    setCheckedValue(e.target.checked ? e.target.value : null);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const adjustInput = {
    borderRadius: "10px",
  };
  const options = [
    {
      value:"australia",
      label: "Australia",
    },
    {
      value:"india",
      label: "India",
    },
    {
      value:"pakistan",
      label: "Pakistan",
    },
    {
      value:"iraq",
      label: "Iraq",
    },
  ];
  const position2 = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
            <Form.Item
              name="Company Name"
              rules={[{ required: true, message: "Please enter company name!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Company Name" size='large' className="inputData"/>
            </Form.Item>
            <Form.Item
              name="Company Person Name"
              rules={[{ required: true, message: "Please enter name!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Company Person Name" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col
            span={3}
            offset={15}
            style={{
              cursor: "pointer",
            }}
          >
            <Upload maxCount={1} listType="picture">
              <ToTopOutlined
                style={{
                  fontSize: "6rem",
                  color: "white",
                  backgroundColor: "#8920aa",
                  borderRadius: "10px",
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
            <Form.Item
              name="Email"
              rules={[{ required: true,type:"email", message: "Please enter email!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Email" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col xs={4} sm={6} md={8} lg={10} offset={4}>
            <Form.Item
              name="Phone"
              rules={[{ required: true,type:"number" ,message: "Please enter phone no!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Phone" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="Address 1"
              rules={[{ required: true, message: "Please enter address!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Address 1" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="Address 2"
              rules={[{ required: true, message: "Please enter address!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Address 2" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="City"
              rules={[{ required: true, message: "Please enter city!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="City" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 3 }}>
            <Form.Item
              name="Zip Code"
              rules={[{ required: true, message: "Please enter zip code!" }]}
            >
               <Input allowClear style={adjustInput} placeholder="Zip code" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col lg={{ span: 6, offset: 3 }}>
            <Form.Item>
            <Select
              className="inputData"
              size={"large"}
              defaultValue="Australia"
              style={{
                width: 280,
              }}
              options={options}
              popupClassName="custom-dropdown"
            />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={position2}>
        <Button className="page-btn"  htmlType="submit">
          Save & Next
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CompanyInfo;
