import { Steps} from 'antd';
import React from 'react'
import '../style.css'

function Navbar({setCurrent,current}) {
  
  
  return (
    <div className="header">
        <img src='./asset/logo.png' width={"140px"} alt="Logo"/>
        <Steps
      progressDot
      current={current}
      onChange={setCurrent}
      style={{width:"70%"}}
      items={[
        {
          title: 'Customer information',
         
        },
        {
          title: 'Customer verification',
         
        },
        {
          title: 'Select Business',
          
        },
        {
          title: 'Shop setup',
          
        },
        {
          title: 'Add users',
         
        },
        {
          title: 'Complete Resgistration',
         
        },
      ]}
    />
   
    </div>
  )
}

export default Navbar