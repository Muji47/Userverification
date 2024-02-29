import { Image, Steps} from 'antd';
import React from 'react'
import '../style.css'

function Navbar() {
  return (
    <div className="header">
        <img src='./logo.png' width={"140px"} alt="Logo"/>
        <Steps
      progressDot
      current={1}
      style={{width:"60%"}}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    </div>
  )
}

export default Navbar