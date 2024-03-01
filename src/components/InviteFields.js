import React from 'react'
import { Col,Row,Form,Select } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import InputField from './InputField'


function InviteFields({label}) {
    const options = [];
    for (let i = 10; i < 36; i++) {
      options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
      });
    }
  return (
    <Form layout='vertical'>
    <Row>
      <Col flex="1 1 200px"><Form.Item label={label}  name="Zip Code" rules={[{ required: true, message: 'Please input!' }]}><InputField style={{borderRadius: "10px",}}/></Form.Item></Col>
      <Select
    className="inputData"
          size={"large"}
          defaultValue="a1"
          style={{
            width: 200,
            margin:"auto 20px ",
            borderRadius: "10px",
          }}
          options={options}
        />   
    </Row>
    </Form>
  )
}

export default InviteFields