import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

class Projects extends Component{
    constructor(props) {
        super(props);

        this.state ={

        }
      }

    render(){
        return(
            <div>
                <Row style={{backgroundColor: this.props.BackgroundColor, paddingTop:"50px"} } > 
                    <Col span={5}><Button ghost type="text" size="large" href="/"><p className="a1"><LeftOutlined />Back</p></Button></Col>
                    <Col span={5} offset={4}><p className="App-greating"> Projects </p>  </Col>
                </Row>
                <Row justify="center"  style={{backgroundColor: this.props.BackgroundColor, marginTop:"-50px"} }>
                    
                </Row>
            </div>
        );
    }
}

export default Projects;