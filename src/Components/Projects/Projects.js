import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Projects extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <Row style={{height: "100vh", backgroundColor: this.props.BackgroundColor}} >
            <p>Projects</p>
            </Row>
        );
    }
}

export default Projects;