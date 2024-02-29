import { Col, Row, Typography } from 'antd'
import React from 'react'
import Showimgdata from './Showimgdata'
import BackForwardBtn from './BackForwardBtn'

function Businesstype() {
    const {Title,Text}=Typography
    const imageSize={
        width: "100px",
        margin: "10px 0"
       }
  return (
    <div>
    <div className='verification'style={{marginTop:"25rem"}}>
        <Title>Select Business Type</Title>
        <Text>Select the best suited business type. This section will effect the default setting for your YAZO setup</Text>
        <Row style={{margin:"30px 0"}}>
            <Col offset={2}><Showimgdata src="./coffeeshop.jpg" businessName="Coffe Cafe" imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./pizzashop.jpg" businessName="Pizza Shop" imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./truckshop.jpg" businessName="Food Truck" imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./juices&drinks.jpg" businessName="Juices & Drinks" imageSize={imageSize}/></Col>
        </Row>
    </div>
    <BackForwardBtn/>
    </div>
  )
}

export default Businesstype