import React from "react";
import { Typography, Button, Form, Select, Input, Space } from "antd";
import "../style.css";

function InviteUser({ onFinish }) {
  const { Title, Text } = Typography;
  const position2 = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const options = [
    {
      value: "pos user",
      label: "POS User",
    },
    {
      value: "cashier",
      label: "Cashier",
    },
    {
      value: "account",
      label: "Account",
    },
  ];
  const adjustInput = {
    borderRadius: "10px",
    width: "30rem",
    float: "left",
  };
  return (
    <div className="verification">
      <Title>Invite User</Title>
      <Text>3 User are allowed for selected packages</Text>
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space>
          <Form.Item
            label={"User 1"}
            name="user1"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input
              allowClear
              style={adjustInput}
              placeholder="Zip code"
              size="large"
              className="inputData"
            />
          </Form.Item>
          <Select
            className="inputData"
            size={"large"}
            defaultValue="User Type"
            style={{
              width: 200,
              margin: "auto 20px ",
              borderRadius: "10px",
            }}
            options={options}
            popupClassName="custom-dropdown"
          />{" "}
        </Space>
        <Space>
          <Form.Item
            label={"User 2"}
            name="user2"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input
              allowClear
              style={adjustInput}
              placeholder="Zip code"
              size="large"
              className="inputData"
            />
          </Form.Item>
          <Select
            className="inputData"
            size={"large"}
            defaultValue="User Type"
            style={{
              width: 200,
              margin: "auto 20px ",
              borderRadius: "10px",
            }}
            options={options}
            popupClassName="custom-dropdown"
          />
        </Space>
        <Space>
          <Form.Item
            label={"User 3"}
            name="user3"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input
              allowClear
              style={adjustInput}
              placeholder="Zip code"
              size="large"
            />
          </Form.Item>
          <Select
            className="inputData"
            size={"large"}
            defaultValue="User Type"
            style={{
              width: 200,
              margin: "auto 20px ",
              borderRadius: "10px",
            }}
            options={options}
            popupClassName="custom-dropdown"
          />
        </Space>
        <Button className="page-btn" style={position2} htmlType="submit">
          Save & Next
        </Button>
      </Form>
    </div>
  );
}

export default InviteUser;
