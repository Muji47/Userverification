import React from 'react'
import { Row,Col } from 'antd'
import Showimgdata from './Showimgdata'
import BackForwardBtn from './BackForwardBtn'

function FoodStep() {
    const imageSize={
        width:"160px",
        height:"120px",
        margin: "10px 0"
    }
    const lowerImage={
        width:"210px",
        height:"120px",
        margin: "15px 0"
    }
  return (
    <div>
    <div style={{ width:"75%", margin :"30rem auto",marginBottom:"0rem"}}>
        <Row style={{margin:"30px 0"}} >
            <Col offset={2}><Showimgdata src="./coffee.jpg" businessName="Coffe Setup" imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./pizza.jpg" businessName="Pizza Setup"imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./ice&juice.jpg" businessName="Ice & Juices Setup" imageSize={imageSize}/></Col>
            <Col offset={2}><Showimgdata src="./southindianfood.jpg" businessName="South Indian Food"imageSize={imageSize}/></Col>
        </Row>
        <Row style={{margin:"20px 0"}} >
            <Col offset={2}><Showimgdata src="./turkishfood.jpg" businessName="Turkish Food" imageSize={lowerImage}/></Col>
            <Col offset={3}><Showimgdata src="./bakery.jpg" businessName="Bread & Bakery" imageSize={lowerImage}/></Col>
            <Col offset={3}><Showimgdata src="./drive&thru.jpg" businessName="Drive Thru Cafe" imageSize={lowerImage}/></Col>
        </Row>
    </div>
        <BackForwardBtn/>
        </div>
  )
}

export default FoodStep