import React, { Component } from 'react';
import {Affix, Button, Card, Col, Row} from 'antd';

import Title from '../Title/Title';

class Art extends Component{
    constructor(props) {
        super(props);

        this.state ={
            Art: [
                {id: 0, name: "Hot tea", src: "/Img/Art/hot_tea_final_final.png"},
                {id: 1, name: "Cat and fish friends", src: "/Img/Art/cat and fish_003.png"},
                {id: 2, name: "Dancing tulip", src: "/Img/Art/dancing tulip final.png"},
                {id: 3, name: "Dacning flower", src: "/Img/Art/dacing flower2 full res.png"}, 
                {id: 4, name: "Okay foot sign", src: "/Img/Art/thumb_007a.png"}, 
                {id: 5, name: "Cyberman x Capsicum", src:"/Img/Art/cyberman2160.png"},
                {id: 6, name: "Zygon x Yam", src: "/Img/Art/Zygon1080.png"},             
                {id: 7, name: "Thactus", src: "/Img/Art/Thactus.png"},            
                {id: 8, name: "Spongebob", src: "/Img/Art/spongebob^2.png"},   
                {id: 9, name: "Pink panther", src: "/Img/Art/PinkPanther^2.png"}, 
                {id: 10, name: "Land before time", src: "/Img/Art/LBT^2.png"}, 
                {id: 11, name: "Teapot", src: "/Img/Art/teapot.png"}, 
                {id: 12, name: "Egypt", src: "/Img/Art/egypt^2.png"}, 
                {id: 13, name: "Fish in shoes set 1", src: "/Img/Art/koiboi1.png"}, 
                {id: 14, name: "Fish in shoes set 2", src: "/Img/Art/koiboi2.png"},
                {id: 15, name: "Fish in shoes set 3", src: "/Img/Art/koiboi3.png"},
                {id: 16, name: "Angler in boot", src: "/Img/Art/anglarboot_001.png"},
            ],
            ArtOpen: false,
            ArtBackground: "#FFE6AB",
            ArtPiece: "",
            ArtPiecePos: 0,
        }
      }

    componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    }

    clickArt = (e) =>{
        console.log(e)
        this.setState({ArtOpen: true})
        this.setState({ArtPiece: e})
    }

    closeArt = () =>{
        this.setState({ArtOpen: false})
    }

    render(){
        return(
            <Row>
                <Col span={this.state.ArtOpen ? 12 : 24}>
                    <Title colour={this.props.AccentColour} title="Art" backUrl="/" />

                    <Row justify="center"  style={{backgroundColor: this.props.BackgroundColour, paddingBottom:"50px"} }>
                        <Col  xxl={{span: this.state.ArtOpen ? 24 : 12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}} > 
                            <Row justify="center">
                            {this.state.Art.map((Art) => (
                                <Col xxl={{span:this.state.ArtOpen ? 8 : 7, offset:1}} xl={{span:this.state.ArtOpen ? 24 : 8, offset:2}} 
                                    lg={{span:this.state.ArtOpen ? 24 : 8, offset:2}} md={{span:this.state.ArtOpen ? 24 : 12, offset:2}} sm={{span: 24, offset:2}}  xs={{span: 24,  offset:2}}>
                                    <Card
                                    bordered={false}
                                    style={{backgroundColor: this.props.BackgroundColour, width: "100%", height:"100%", marginTop:"50px", cursor: "pointer"}}
                                    cover={<img id={Art.id} style={{ width: "100%", height:"100%"}} src={Art.src} />}
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
                        <Col justify="center" span={12} style={{backgroundColor: this.state.ArtBackground}}>
                                <Affix offsetTop={0}>
                                <Row>
                                    <Col span={5}>
                                        <Button ghost type="text" size="large" onClick={this.closeArt} >
                                            <p className="Title" > x </p>
                                        </Button>
                                    </Col> 
                                    <Col span={5} offset={4} style={{paddingTop:"10%"}}><p className="SubHeading"> {this.state.Art[this.state.ArtPiece.id].name} </p></Col>
                                </Row>
                                <Row >
                                    <Col span={24} style={{paddingLeft:"10%"}}>
                                        <Card
                                            bordered={false}
                                            style={{backgroundColor: this.state.ArtBackground, width: "90%", height:"90%"}}
                                            cover={<img style={{ width: "100%", height:"100%"}} src={this.state.ArtPiece.src} />}
                                        > 
                                        </Card>
                                    </Col>
                                </Row>
                            </Affix>
                        </Col>
                }
            </Row>
        );
    }
}

export default Art;