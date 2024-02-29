import React from 'react'
import { Row,Col, Typography,Dropdown} from 'antd'
import InputField from './InputField'
import { CaretDownOutlined } from '@ant-design/icons'

function InviteUser() {
    const {Title,Text}=Typography
  return (
    <div style={{margin:"15rem auto",width:"70%"}}>
        <Title>Invite User</Title>
        <Text>3 User are allowed for selected packages</Text>
         <Row>
      <Col flex="1 1 200px"><InputField/></Col>
      <Col flex="0 1 300px">   
      </Col>
    </Row>
    </div>
  )
}

export default InviteUser