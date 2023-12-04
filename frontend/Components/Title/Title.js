import React, { Component } from 'react';
import { Col, Row, Button, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

class Title extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <Row style={{backgroundColor: this.props.colour, height:"75px"} }> 
                <Col span={5} offset={2}>
                    <Button ghost type="text" size="large" href={this.props.backUrl} style={{marginTop:"20px"}}>
                        <p className="SubHeading"> <LeftOutlined />Back</p>
                    </Button>
                </Col>
                <Col span={6} offset={2}><p className="Title">{this.props.title}</p></Col>
            </Row>
        );
    }
}

export default Title;