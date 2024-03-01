import React from 'react'
import { Input, Space, Typography } from 'antd'

function VerifyCode({text,icon,cross}) {
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
        <Input type={"number"} style={widthInput} max={1}/>
        <Input type={"number"} style={widthInput} max={1}/>
        <Input type={"number"} style={widthInput} max={1}/>
        <Input type={"number"} style={widthInput} max={1}/>
        <Input type={"number"} style={widthInput} max={1}/>
        <Input type={"number"} style={widthInput} max={1}/>
        </Space>
        </div>
        {icon}
        {cross}
    </div>
  )
}

export default VerifyCode