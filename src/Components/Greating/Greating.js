import React, { Component } from 'react';
import {Col, Row, Card, Avatar, Space} from 'antd';
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons';

class Greating extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <Row justify="center">
                <Col span={20}>
                    <Card 
                        bordered = {false}
                        hoverable = {false}
                        style={{
                            height: "100vh", 
                            backgroundColor: "#FAFAF0",
                            paddingTop: "25vh",
                        }}
                        >
                        <Avatar size={256} src="/img/IMG_0939.JPG"></Avatar>
                        <p className="App-greating"> Hello! </p>  
                        <Row justify="center">
                            <Col lg={{span: 18}} md={{span: 12}} xs={{span: 0}}>
                                <p className="P-Lato" style={{marginTop:"-70px"}}>
                                    My name is Szymon Budzyna-Dawidowksi. I am 23 year old software and hardware engineer. 
                                    I graduated in computer systems engineering from the university of auckland in 2022.
                                    This is a website I built to showcase my engineering projects and my art. 
                                    The engineering projects section of my website is going to be updated in the near future. 
                                </p>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Space>
                                <a class="App-link" href="https://github.com/SzymonDawi">
                                    <GithubOutlined style={{fontSize: "25px"}}/>
                                </a>
                                <a class="App-link" href="https://www.linkedin.com/in/szymon-dawidowski/">
                                    <LinkedinOutlined style={{fontSize: "25px"}}/>
                                </a>
                                <a class="App-link" href="https://www.instagram.com/drawidowski/">
                                    <InstagramOutlined style={{fontSize: "25px"}}/>
                                </a>
                            </Space>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Greating;