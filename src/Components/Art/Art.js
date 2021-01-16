import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import {LeftOutlined } from '@ant-design/icons';

class Art extends Component{
    constructor(props) {
        super(props);

        this.state ={
            Art: ["/Img/Art/hot_tea_final_final.png",
            "/Img/Art/cat and fish_003.png",
            "/Img/Art/dancing tulip final.png",
            "/Img/Art/dacing flower2 full res.png", 
            "/Img/Art/thumb_007a.png", 
            "/Img/Art/cyberman2160.png",
            "/Img/Art/Zygon1080.png",             
            "/Img/Art/Thactus.png",            
            "/Img/Art/spongebob^2.png",   
            "/Img/Art/PinkPanther^2.png", 
            "/Img/Art/LBT^2.png", 
            "/Img/Art/teapot.png", 
            "/Img/Art/egypt^2.png", 
            "/Img/Art/koiboi1.png", 
            "/Img/Art/koiboi2.png",
            "/Img/Art/koiboi3.png",
            "/Img/Art/anglarboot_001.png",
            ],
            ArtOpen: false,
            ArtBackground: "#FFE6AB",
            ArtPiece: "",
            ArtPiecePos: 0,

        }
      }

    clickArt = (e) =>{
        this.setState({ArtOpen: true})
        this.setState({ArtPiece: e.src})
        console.log(e.src)
    }

    closeArt = () =>{
        this.setState({ArtOpen: false})
    }

    handleScroll = (e) =>{
        this.setState({ArtPiecePos: window.pageYOffset})
        console.log(this.state.ArtPiecePos)
    }

    render(){
        return(
                <Row>

                    <Col span={this.state.ArtOpen ? 12 : 24}>
                        <Row style={{backgroundColor: this.props.AccentColour, paddingTop:"20px", height:"150px"} } > 
                            <Col span={5} offset={2}>
                                <Button ghost type="text" size="large" href="/" style={{marginTop:"35px"}}>
                                    <p className="SubHeading"> <LeftOutlined />Back </p>
                                </Button>
                            </Col>
                            <Col span={5} offset={2}><p className="Title"> Art </p>  </Col>
                        </Row>
                        <Row justify="center"  style={{backgroundColor: this.props.BackgroundColor, paddingBottom:"50px"} }>
                            <Col  xxl={{span: this.state.ArtOpen ? 24 : 12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}} > 
                                <Row justify="center">
                                {this.state.Art.map((Src) => (
                                    <Col xxl={{span:this.state.ArtOpen ? 8 : 7, offset:1}} xl={{span:this.state.ArtOpen ? 24 : 8, offset:2}} 
                                        lg={{span:this.state.ArtOpen ? 24 : 8, offset:2}} md={{span:this.state.ArtOpen ? 24 : 12, offset:2}} sm={{span: 24, offset:2}}  xs={{span: 24,  offset:2}}>
                                        <Card
                                        bordered={false}
                                        style={{backgroundColor: this.props.BackgroundColor, width: "100%", height:"100%", marginTop:"50px"}}
                                        cover={<img style={{ width: "100%", height:"100%"}} src={Src} />}
                                        onClick={e => this.clickArt(e.target)}
                                    >   
                                        </Card>
                                    </Col>
                                ))}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {this.state.ArtOpen && 
                        <Col justify="center" span={12} style={{backgroundColor: this.state.ArtBackground,   position: "sticky"}}>
                                <Row >
                                    <Col span={5}>
                                        <Button ghost type="text" size="large" onClick={this.closeArt} >
                                        <p className="Title" > x </p>
                                        </Button>
                                    </Col>
                                    <Col span={5} offset={4}><p className="Title"> Test </p></Col>
                                </Row>
                                <Row >
                                    <Col span={24} style={{paddingLeft:"25%"}}>
                                        <Card
                                            bordered={false}
                                            style={{backgroundColor: this.state.ArtBackground, width: "80%", height:"80%"}}
                                            cover={<img style={{ width: "80%", height:"80%"}} src={this.state.ArtPiece} />}
                                        > 
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20} style={{paddingLeft:"25%"}}>
                                        <p style={{ width: "80%"}}>
                                        Suspendisse non diam lorem. Morbi ultricies aliquam massa, vel scelerisque lectus luctus eget. 
                                        Quisque in justo interdum, cursus risus vel, pellentesque ex. Vestibulum ut enim ut tellus fringilla varius. 
                                        Mauris accumsan sit amet ex sed porttitor. Mauris dictum sit amet quam a semper. Quisque congue tincidunt purus nec placerat. 
                                        Quisque eget molestie erat. Phasellus euismod ultrices tellus at sollicitudin. Sed blandit aliquet lacus, vitae fringilla nisl mattis eu.
                                        </p>
                                    </Col>
                                </Row>
                        </Col>
                    }
                </Row>
        );
    }
}

export default Art;