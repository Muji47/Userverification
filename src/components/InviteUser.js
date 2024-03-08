import React from "react";
import { Typography, Button, Form, Select, Input, Space } from "antd";
import "../style.css";

function InviteUser({onFinish}) {
  const { Title, Text } = Typography;
  const position2 = {
    position: "absolute",
    bottom: "10px",
    right: "10%",
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
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email!",
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
          <Form.Item
            name="userType1"
            rules={[
              {
                required: true,
                message: "Please select a user type!",
              },
            ]}
            style={{marginTop:"30px"}}
          >
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
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={"User 2"}
            name="user2"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email!",
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
          <Form.Item
            name="userType2"
            rules={[
              {
                required: true,
                message: "Please select a user type!",
              },
            ]}
            style={{marginTop:"30px"}}
          >
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
          </Form.Item>
        </Space>
        <Space>
          <Form.Item
            label={"User 3"}
            name="user3"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email!",
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
          <Form.Item
            name="userType3"
            rules={[
              {
                required: true,
                message: "Please select a user type!",
              },
            ]}
            style={{marginTop:"30px"}}
          >
            <Select
              className="inputData"
              size={"large"}
              defaultValue="User Type"
              style={{
                width: 200,
                display:"flex",
                margin: "auto 20px ",
                borderRadius: "10px",
              }}
              options={options}
              popupClassName="custom-dropdown"
            />
          </Form.Item>
        </Space>
        <Button  htmlType="submit" className="page-btn" style={position2}>
          Almost & Finish
        </Button>
      </Form>
    </div>
  );
}

export default InviteUser;
