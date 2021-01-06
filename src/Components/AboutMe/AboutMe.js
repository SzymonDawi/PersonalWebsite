import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class AboutMe extends Component{
    constructor(props) {
        super(props);

      }


    render(){
        return(
            <Row style={{height: "100vh", backgroundColor: this.props.BackgroundColor}} >
            <p>AboutMe</p>
            </Row>
        );
    }
}

export default AboutMe;