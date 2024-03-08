import React from "react";
import { Input, Space, Typography } from "antd";
import countDown from "./Modal"
import "../style.css";
import { useState } from "react";

function VerifyCode({ text, icon, cross, disabled }) {
  const [modal,setModal]=useState(false)
  const { Text } = Typography;
  const widthInput = {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    margin: "10px 0",
    borderColor:"#8920aa"
  };
  
  const handleKeyDown = (event) => {
    if (!(event.key >= '0' && event.key <= '9') && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      event.preventDefault();
    }
  };
  const handleClick = () => {
    if (!disabled) {
      countDown(); 
    }
  };
  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <div>
          <Text style={{ display: "block" }}>{text}</Text>
          <Space>
          <Input
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <Input
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <Input
              maxLength={1}
              min={0}
              max={9}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <Input
              maxLength={1}
              min={0}
              max={9}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <Input
              maxLength={1}
              min={0}
              max={9}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <Input
              maxLength={1}
              min={0}
              max={9}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              
            />
          </Space>
        </div>
        {icon}
        {cross}
      </div>
      <Typography.Text
        className="Verification-Text"
      onClick={handleClick} 
        disabled={disabled}
      >
        Resend Code
      </Typography.Text>
    </>
  );
}

export default VerifyCode;
