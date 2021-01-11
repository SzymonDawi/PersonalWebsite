import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';


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
        }
      }

    render(){
        return(
            <div>
                <Row style={{backgroundColor: this.props.BackgroundColor, paddingTop:"50px"} } > 
                    <Col span={5}><Button ghost type="text" size="large" href="/" ><p className="a1"> <LeftOutlined />Back </p></Button></Col>
                    <Col span={5} offset={4}><p className="App-greating"> Art </p>  </Col>
                </Row>
                <Row justify="center"  style={{backgroundColor: this.props.BackgroundColor, marginTop:"-50px", paddingBottom:"50px"} }>
                    {this.state.Art.map((Src) => (
                        <Col span={5}  style={{paddingTop:"25px", paddingBottom:"25px" }}>
                            <Card
                            style={{ width: "15vw", height:"15vw"}}
                            cover={<img src={Src} />}
                        >
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default Art;