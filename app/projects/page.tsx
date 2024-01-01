'use client';

import {Col, Row} from 'antd';

import Title from "../components/title";

export default function Home() {
  return (
    <Row className="main">
        <Col span={24}>
            <Title componentCat="projectComponent" title="Projects" backUrl="/" />
            
            <Row justify="center" className="projectComponent" style={{paddingBottom:"50px"}}>
                <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}}>
                    
                    {/* {ProjectList.map((Src) => (

                        <Row justify="center" style={{height: "300px", paddingTop:"30px"}}>
                            <Card
                                bordered={false}
                                style={{backgroundColor: this.props.BackgroundColour, width: "100%", height:"100%", cursor: "pointer" , borderRadius: "25px", border: "5px solid " + this.props.AccentColour}}
                                onClick={e => this.clickProject(Src.Id)}
                            >   
                                <Row>
                                    <Col span={16}>
                                    <p className="SubHeading"> {Src.Name}</p>
                                    <p className="P-Lato">
                                        {Src.Description}
                                    </p> 

                                    </Col>
                            
                                    <Col lg={{span: 8}} md={{span: 0}} xs={{span: 0}}>
                                        <img src={Src.ImgPath} style={{width: "300px", marginTop:"-50px"}}></img>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    ))} */}
                </Col>
            </Row>
        </Col>
    </Row>
  )
}