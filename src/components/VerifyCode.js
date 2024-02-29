import React from 'react'
import { Input, Space, Typography } from 'antd'
import InputField from './InputField'

function VerifyCode({text}) {
    const {Text}=Typography
    const widthInput={
        width:"40px",
        borderRadius:"5px",
        margin:"10px 0"
    }
  return (
    <div>
        <Text  style={{display:"block"}}>{text}</Text>
        <Space>
        <InputField type={"number"} style={widthInput}/>
        <InputField type={"number"} style={widthInput}/>
        <InputField type={"number"} style={widthInput}/>
        <InputField type={"number"} style={widthInput}/>
        <InputField type={"number"} style={widthInput}/>
        <InputField type={"number"} style={widthInput}/>
        </Space>
    </div>
  )
}

export default VerifyCode