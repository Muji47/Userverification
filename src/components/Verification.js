import React, { useState } from "react";
import { Typography, Space, Button } from "antd";
import {
  CheckOutlined,
  DoubleRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "../style.css";
import VerifyCode from "./VerifyCode";

function Verification() {
  const [skipBtn, setSkipBtn] = useState(true);
  const [disabled,setDisabled]=useState(false)
  const { Title } = Typography;
  const handleSkip = () => {
    setSkipBtn(false);
    setDisabled(true)
  };
  const crossStyle = {
    display: "inline",
    color: "red",
  };
  return (
    <>
      <div className="verification">
        <Title>OTP Verification</Title>
        <Space
          style={{ display: "flex", margin: "auto", flexDirection: "column" }}
        >
          <Space className="email-border">
            <VerifyCode
              text="Email OTP sent to div**********@gmail.com"
              icon={<CheckOutlined className="tick-icon verify-icon" />}
              cross={
                <CloseOutlined
                  className="verify-icon"
                  style={{ display: "none" }}
                  disabled={disabled}
                />
              }
            />
          </Space>
          <VerifyCode
            text="Mobile OTP sent to 03********45"
            icon={
              <CheckOutlined
                className="tick-icon verify-icon"
                style={skipBtn ? crossStyle : { display: "none" }}
                disabled={disabled}
              />
            }
            cross={
              <CloseOutlined
                className="verify-icon"
                style={skipBtn ? { display: "none" } : crossStyle}
                disabled={disabled}
              />
            }
            disabled={disabled}
          />
        </Space>
        {skipBtn && (
          <Button className="skip page-btn" onClick={handleSkip}>
            Skip
            <DoubleRightOutlined />
          </Button>
        )}
      </div>
    </>
  );
}

export default Verification;
