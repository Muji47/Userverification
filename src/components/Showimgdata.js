import { Typography } from 'antd'
import React from 'react'

function Showimgdata({src,businessName,imageSize}) {
    const {Text}=Typography
  return (
    <div style={{cursor:"pointer"}}>
        <img src={src} alt='business images' style={imageSize}/>
        <Text style={{display:"block", textAlign:"left"}}>{businessName}</Text>
    </div>
  )
}

export default Showimgdata