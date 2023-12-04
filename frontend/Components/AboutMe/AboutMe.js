import React, { Component } from 'react';
import {Col, Row } from 'antd';

import Title from '../Title/Title';

class AboutMe extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <div>
                <Row style={{height: "100vh"}} >
                    <Col span={24}>
                        <Title colour={this.props.AccentColour} title="About Me" backUrl="/" />

                        <Row justify="center">
                            <Col span={18} style={{backgroundColor: this.props.BackgroundColour, width: "100%", height:"100%", borderRadius: "25px", border: "5px solid " + this.props.AccentColour, marginTop: "25px"}}>
                                
                            </Col>
                        </Row>
                        
                        {/* <Row justify="center"  style={{backgroundColor: this.props.BackgroundColour, paddingBottom:"50px"}}>
                            <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}}>
                                

                            </Col>
                        </Row> */}
                    </Col>
                </Row>
        </div>
        );
    }
}

export default AboutMe;