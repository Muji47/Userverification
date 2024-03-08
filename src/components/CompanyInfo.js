import { ToTopOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Row,
  Col,
  Select,
  Button,
  Upload,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";
import "../style.css";

function CompanyInfo({ onFinish }) {
  const [checkedValue, setCheckedValue] = useState(null);
  const [upload, setUpload] = useState(true);

  const onChange = (e) => {
    setCheckedValue(e.target.checked ? e.target.value : null);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const adjustInput = {
    borderRadius: "10px",
    borderColor:"#8920aa"
  };
  const options = [
    {
      value: "australia",
      label: "Australia",
    },
    {
      value: "india",
      label: "India",
    },
    {
      value: "pakistan",
      label: "Pakistan",
    },
    {
      value: "iraq",
      label: "Iraq",
    },
  ];
  const checkImageResolution = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        if (img.width <= 800 && img.height <= 600) {
          resolve();
          setUpload(true);
        } else {
          reject("Image resolution must be lower than or equal to 800x600.");
          setUpload(false);
        }
      };
    });
  };

  const handleBeforeUpload = async (file) => {
    try {
      await checkImageResolution(file);
      return true;
    } catch (error) {
      message.error(error);
      return false;
    }
  };

  const handleKeyDown = (event) => {
    if (!(event.key >= '0' && event.key <= '9') && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      event.preventDefault();
    }
  };
  return (
    <div style={{ width: "78%", margin: "auto" }}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col xs={4} sm={6} md={8} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
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
              rules={[
                { required: true, message: "Please enter company name!" },
              ]}
            >
              <Input
                allowClear
                style={adjustInput}
                placeholder="Company Name"
                size="large"
                className="inputData"
              />
            </Form.Item>
            <Form.Item name="Company Person Name">
              <Input
                allowClear
                style={adjustInput}
                placeholder="Company Person Name"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
          <Col
            className="uploadIcon"
            style={{ textAlign: "right" }}
            xs={4}
            sm={6}
            md={8}
            lg={12}
          >
            <Upload
              maxCount={1}
              listType="picture"
              beforeUpload={handleBeforeUpload}
              showUploadList={upload ? true : false}
            >
              <ToTopOutlined
                style={{
                  fontSize: "5rem",
                  color: "white",
                  backgroundColor: "#8920aa",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              Upload Company Logo
              <Typography.Text style={{ display: "block" }}>
                800x600px
              </Typography.Text>
            </Upload>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Item
              name="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter email!",
                },
              ]}
            >
              <Input
                allowClear
                style={adjustInput}
                placeholder="Email"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form.Item
              name="Phone"
         
            >
              <Input
                addonBefore="+61"
                maxLength={10}
                min={0}
                style={{
                  width: "100%",
                  
                }}
                placeholder="Phone"
                size="large"
                controls={false}
                className="inputData"
                onKeyDown={handleKeyDown}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item name="Address 1">
              <Input
                allowClear
                style={adjustInput}
                placeholder="Address 1"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="Address 2">
              <Input
                allowClear
                style={adjustInput}
                placeholder="Address 2"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12} justify="space-between">
          <Col xs={{ span: 5 }} lg={{ span: 8 }}>
            <Form.Item
              name="City"
              rules={[{ required: true, message: "Please enter city!" }]}
            >
              <Input
                allowClear
                style={adjustInput}
                placeholder="City"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 8 }}>
            <Form.Item
              name="Zip Code"
              rules={[{ required: true, message: "Please enter zip code!" }]}
            >
              <Input
                allowClear
                style={adjustInput}
                placeholder="Zip code"
                size="large"
                className="inputData"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 8 }}>
            <Form.Item>
              <Select
                className="inputData"
                size={"large"}
                defaultValue="Australia"
                options={options}
                popupClassName="custom-dropdown"
                placement="bottomLeft"
                rules={[
                  { required: true, message: "Please enter select country!" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button className="page-btn infoBtn" htmlType="submit">
            Save & Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CompanyInfo;
