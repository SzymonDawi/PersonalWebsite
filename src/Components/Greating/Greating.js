import React, { Component } from 'react';
import {Col, Row, Card, Avatar} from 'antd';

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
                            paddingTop: "15vh",
                        }}
                        >
                        <Avatar size={256} src="/img/IMG_0939.JPG"></Avatar>
                        <p className="App-greating"> Hello! </p>  
                        <p className="P-Lato" style={{marginTop:"-50px"}}>
                            My name is Szymon Budzyna-Dawidowksi. I am a software and hardware engineer, an amature artist, and an amature actor. 
                            This is a website I built to showcase my engineering projects and my art. This website is very much a work in progress.
                            Most of the features are impelemented and its only a matter of creating the content for each section. 
                            I will be slowly updating my project writeups to a better format, like the one used for my personal website project page.
                        </p>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Greating;