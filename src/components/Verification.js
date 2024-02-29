import React from 'react'
import { Typography } from 'antd'
import "../style.css"
import VerifyCode from './VerifyCode'

function Verification() {
    const {Title,Text}=Typography
  return (
    <div className='verification'>
        <Title >OTP Verification</Title>
        <VerifyCode text="Email OTP sent to div**********@gmail.com"/>
        <VerifyCode text="Mobile OTP sent to 03********45"/>

    </div>
  )
}

export default Verification