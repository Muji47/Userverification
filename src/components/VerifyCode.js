import React from 'react'
import { Space, Typography } from 'antd'
import InputField from './InputField'

function VerifyCode({text,icon}) {
    const {Text}=Typography
    const widthInput={
        width:"40px",
        borderRadius:"5px",
        margin:"10px 0"
    }
  return (
    <div style={{display:"flex", padding:"1rem"}}>
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
        {icon}
    </div>
  )
}

export default VerifyCode