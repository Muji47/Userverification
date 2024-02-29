import React from 'react'
import { Typography } from 'antd'
import "../style.css"
import VerifyCode from './VerifyCode'

function Verification() {
    const {Title,Text}=Typography
  return (
    <div className='verification'>
        <Title >OTP Verification</Title>
        <VerifyCode text="Email OTP sent to div**********"/>
    </div>
  )
}

export default Verification