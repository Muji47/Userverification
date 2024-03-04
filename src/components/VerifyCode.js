import React, { useState } from "react";
import { InputNumber, Space, Typography } from "antd";
import InformationMessage from "./Modal";
import "../style.css";

function VerifyCode({ text, icon, cross, disabled }) {
  const [opeModal, setOpenModal] = useState(false);
  const { Text } = Typography;
  const widthInput = {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    margin: "10px 0",
  };
  
  const handleCode = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const formatInput = (value) => {
    return String(value).replace(/[^0-9]/g, '');
  };
  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <div>
          <Text style={{ display: "block" }}>{text}</Text>
          <Space>
          <InputNumber
              formatter={formatInput}
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
            />
            <InputNumber
              formatter={formatInput}
              maxLength={1}
              max={9}
              min={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
            />
            <InputNumber
              maxLength={1}
              minLength={0}
              style={widthInput}
              controls={false}
              disabled={disabled}
              
            />
          </Space>
        </div>
        {icon}
        {cross}
      </div>
      <Typography.Text
        className="Verification-Text"
        onClick={handleCode}
        disabled={disabled}
      >
        Resend Code
      </Typography.Text>
      {opeModal && (
        <InformationMessage showModal={handleCode} closeModal={closeModal} />
      )}
    </>
  );
}

export default VerifyCode;
