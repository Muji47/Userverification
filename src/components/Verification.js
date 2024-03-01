import React from 'react'
import { Typography,Space, Button } from 'antd'
import { CheckOutlined ,DoubleRightOutlined,CloseOutlined} from '@ant-design/icons'
import "../style.css"
import VerifyCode from './VerifyCode'

function Verification({handleNext}) {
    const {Title}=Typography
  return (
    <>
    <div className='verification'>
        <Title >OTP Verification</Title>
        <Space style={{display:"flex", margin:"auto", flexDirection:"column"}}>
          <Space className='email-border'>
        <VerifyCode text="Email OTP sent to div**********@gmail.com" icon={<CheckOutlined className='tick-icon' style={{display:"none"}}/>} cross={<CloseOutlined className='tick-icon' />}/>
        </Space>
        <VerifyCode text="Mobile OTP sent to 03********45" icon={<CheckOutlined className='tick-icon'/>} cross={<CloseOutlined className='tick-icon' style={{display:"none"}}/>}/>
        </Space>
        <Button className='skip page-btn' onClick={handleNext}>Skip<DoubleRightOutlined /></Button>
    </div>
    </>
  )
}

export default Verification