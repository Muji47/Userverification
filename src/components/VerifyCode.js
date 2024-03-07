import React, { useState } from "react";
import { InputNumber, Space, Typography } from "antd";
import InformationMessage from "./Modal";
import "../style.css";

function VerifyCode({ text, icon, cross, disabled }) {
  const [modal,setModal]=useState(false)
  const { Text } = Typography;
  const widthInput = {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    margin: "10px 0",
  };
  
  const showModal=()=>{
    setModal(true)
  }
  const closeModal=()=>{
    setModal(false)
  }
  const handleKeyDown = (event) => {
    if (!(event.key >= '0' && event.key <= '9') && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      event.preventDefault();
    }
  };

  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <div>
          <Text style={{ display: "block" }}>{text}</Text>
          <Space>
          <InputNumber
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <InputNumber
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
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
        onClick={showModal}
        disabled={disabled}
      >
        Resend Code
      </Typography.Text>
      {
        modal&&!disabled&&<InformationMessage/>
      }
    </>
  );
}

export default VerifyCode;
