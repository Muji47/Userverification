import { Input } from 'antd'
import React from 'react'
import "../style.css"

function InputField({style,placeholder,type,className}) {
  return (
    <Input allowClear style={style} placeholder={placeholder} size='large' required rules={[{required:true,message:"Please enter"}]} type={type} className={className}/>

  )
}

export default InputField