import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Art extends Component{
    constructor(props) {
        super(props);

        this.state ={
            Art: {},
        }
      }

    render(){
        return(
            <Row style={{height: "100vh", backgroundColor: this.props.BackgroundColor}} >
                <p>Art</p>
            </Row>
        );
    }
}

export default Art;