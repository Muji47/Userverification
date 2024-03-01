import { Steps} from 'antd';
import React from 'react'
import '../style.css'

function Navbar({setCurrent,current}) {
  
  
  return (
    <div className="header">
        <img src='./logo.png' width={"140px"} alt="Logo"/>
        <Steps
      progressDot
      current={current}
      onChange={setCurrent}
      style={{width:"60%"}}
      items={[
        {
          title: 'Customer information',
         
        },
        {
          title: 'Customer verification',
         
        },
        {
          title: 'Select usiness',
          
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