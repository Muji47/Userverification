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
  
  return (
    <div style={{ width: "78%", margin: "auto" }}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row  justify={"space-between"} gutter={6}>
          <Col xs={4} sm={6} md={8} lg={11}>
            <div style={{display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
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
            </div>
            <Form.Item
              name="Company Name"
              rules={[{ required: true, message: "Please enter company name!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Company Name" size='large' className="inputData"/>
            </Form.Item>
            <Form.Item
              name="Company Person Name"
            >
              <Input allowClear style={adjustInput} placeholder="Company Person Name" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col
          xs={3} sm={5} md={7}
            lg={6}
            className="uploadIcon"
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
        <Row justify={"space-between"} gutter={6}>
          <Col xs={4} sm={6} md={8} lg={11}>
            <Form.Item
              name="Email"
              rules={[{ required: true,type:"email", message: "Please enter email!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="Email" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col xs={4} sm={6} md={8} lg={11}>
            <Form.Item
              name="Phone"
            >
              <Input allowClear type="number" style={adjustInput} placeholder="Phone" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="Address 1"
            >
              <Input allowClear style={adjustInput} placeholder="Address 1" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="Address 2"
            >
              <Input allowClear style={adjustInput} placeholder="Address 2" size='large' className="inputData"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12} justify="space-between">
          <Col xs={{ span: 5 }} lg={{ span: 7 }}>
            <Form.Item
              name="City"
              rules={[{ required: true, message: "Please enter city!" }]}
            >
              <Input allowClear style={adjustInput} placeholder="City" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 7, offset: 1 }}>
            <Form.Item
              name="Zip Code"
              rules={[{ required: true, message: "Please enter zip code!" }]}
            >
               <Input allowClear style={adjustInput} placeholder="Zip code" size='large' className="inputData"/>
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 7, offset: 1 }}>
            <Form.Item>
            <Select
              className="inputData"
              size={"large"}
              defaultValue="Australia"
              options={options}
              popupClassName="custom-dropdown"
              placement="bottomLeft"
              rules={[{ required: true, message: "Please enter select country!" }]}
            />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item >
        <Button className="page-btn infoBtn"  htmlType="submit">
          Save & Next
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CompanyInfo;
