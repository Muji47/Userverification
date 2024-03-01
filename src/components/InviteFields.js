import React from 'react'
import { Col,Row,Form,Select } from 'antd'
import InputField from './InputField'


function InviteFields({label}) {
    const options = [
        {
            label:"POS User"
          },
          {
            label:"Cashier"
          },
          {
            label:"Account"
          }
    ];
    
  return (
    <Form layout='vertical'>
    <Row>
      <Col flex="1 1 200px"><Form.Item label={label}  name="Zip Code" rules={[{ required: true, message: 'Please input!' }]}><InputField style={{borderRadius: "10px",}}/></Form.Item></Col>
      <Select
    className="inputData"
          size={"large"}
          defaultValue="User Type"
          style={{
            width: 200,
            margin:"auto 20px ",
            borderRadius: "10px",
            
          }}
          options={options}
          dropdownClassName="custom-dropdown"
        />   
    </Row>
    </Form>
  )
}

export default InviteFields