import React from 'react'
import {  Typography,Button} from 'antd'
import InviteFields from './InviteFields'
import '../style.css'



function InviteUser() {
    const {Title,Text}=Typography
    const position2={
      position:"absolute",
      bottom:"10px",
      right:"10px"
    }
    
  return (
    <div className='verification'>
        <Title>Invite User</Title>
        <Text>3 User are allowed for selected packages</Text>
        <InviteFields label="User 1"/>
        <InviteFields label="User 2"/>
        <InviteFields label="User 3"/>
        <Button className='page-btn' style={position2} htmlType='submit'>Save & Next</Button>
    </div>
  )
}

export default InviteUser