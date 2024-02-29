import React from 'react'
import { Input, Typography } from 'antd'
import InputField from './InputField'

function VerifyCode({text}) {
    const {Text}=Typography
  return (
    <div>
        <Text>{text}</Text>
        <InputField type={"number"} />
    </div>
  )
}

export default VerifyCode