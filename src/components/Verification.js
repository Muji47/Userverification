import React from 'react'
import { Typography,Space, Button } from 'antd'
import { CheckOutlined ,DoubleRightOutlined} from '@ant-design/icons'
import "../style.css"
import VerifyCode from './VerifyCode'
import BackForwardBtn from './BackForwardBtn'

function Verification() {
    const {Title}=Typography
  return (
    <>
    <div className='verification'>
        <Title >OTP Verification</Title>
        <Space style={{display:"flex", margin:"auto", flexDirection:"column"}}>
          <Space className='email-border'>
        <VerifyCode text="Email OTP sent to div**********@gmail.com" icon={<CheckOutlined className='tick-icon'/>}/>
        </Space>
        <VerifyCode text="Mobile OTP sent to 03********45" icon={<CheckOutlined className='tick-icon'/>}/>
        </Space>
        <Button className='skip page-btn'>Skip<DoubleRightOutlined /></Button>
    </div>
    <BackForwardBtn/>
    </>
  )
}

export default Verification