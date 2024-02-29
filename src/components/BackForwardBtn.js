import React from 'react'
import "../style.css"
import { Button } from 'antd'

function BackForwardBtn() {
  return (
    <>
    <Button className='page-btn back-btn'>Back</Button>
    <Button className='page-btn'>Save & Next</Button>
    </>
  )
}

export default BackForwardBtn