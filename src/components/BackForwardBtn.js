import React from 'react'
import "../style.css"
import { Button } from 'antd'

function BackForwardBtn({current,handleNext,handlePrev}) {
  let backButton=true
  let forwardButton=true
  let submitButton="Save & Next"
  const position1={
    position:"absolute",
    bottom:"10px",
    left:"10%"
  }
  const position2={
    position:"absolute",
    bottom:"10px",
    right:"10%"
  }
  if(current===0){
  backButton=false
  }
  if(current===4||current===0){
    forwardButton=false
  }
  if(current===5){
    submitButton="Done"
  }
  return (
    <>
    
    {backButton&&<Button className='page-btn back-btn' style={position1} onClick={handlePrev}>Back</Button>}
    {forwardButton&&<Button className='page-btn' style={position2} htmlType='submit' onClick={handleNext}>{submitButton}</Button>}
    </>
  )
}

export default BackForwardBtn