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
          title: 'first',
         
        },
        {
          title: 'Second',
         
        },
        {
          title: 'Third',
          
        },
        {
          title: 'Fourth',
          
        },
        {
          title: 'Fifth',
         
        },
        {
          title: 'Last',
         
        },
      ]}
    />
   
    </div>
  )
}

export default Navbar