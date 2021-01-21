import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

class Projects extends Component{
    constructor(props) {
        super(props);

        this.state ={
            ProjectList: [
                "Project 1",
                "Project 2",
                "Project 3",
                "Project 4", 
                "Project 5", 
                "Project 6",
                "Project 7",             
                "Project 8",            
                "Project 9",   
                "Project 10", 
                "Project 11", 
                "Project 12", 
                "Project 13", 
                "Project 14", 
                "Project 15",
                "Project 16",
                "Project 17",
            ],
            Redirect: false,
        }
      }

    clickProject = () => {
        this.setState({Redirect: true});
    }

    render(){
        if(this.state.Redirect){
            return <Redirect push to="/Projects/PersonalWebsite"/> 
        }
        else{
            return(
                <div>
                    <Row>
                        <Col span={24}>
                            <Row style={{backgroundColor: this.props.AccentColour, paddingTop:"20px", height:"150px"} } > 
                                <Col span={5} offset={2}>
                                    <Button ghost type="text" size="large" href="/" style={{marginTop:"35px"}}>
                                        <p className="SubHeading"> <LeftOutlined />Back </p>
                                    </Button>
                                </Col>
                                <Col span={5} offset={2}><p className="Title"> Projects </p>  </Col>
                            </Row>
                            
                            <Row justify="center"  style={{backgroundColor: this.props.BackgroundColour, paddingBottom:"50px"} }>
                                <Col  xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}} > 
                                    <Row justify="center">
                                    {this.state.ProjectList.map((Src) => (
                                        <Col xxl={{span: 7, offset:1}} xl={{span: 8, offset:2}} 
                                            lg={{span: 8, offset:2}} md={{span: 12, offset:2}} 
                                            sm={{span: 24, offset:2}}  xs={{span: 24,  offset:2}}
                                            style={{paddingTop:"50px"}}
                                        >   
                                                <Card
                                                    bordered={false}
                                                    style={{backgroundColor: "#DCC3C6", width: "100%", height:"100%", cursor: "pointer"}}
                                                    onClick={this.clickProject}
                                                >   
                                                    <p className="SubHeading"> {Src}</p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum justo non luctus convallis. 
                                                        Maecenas fringilla tellus at ornare efficitur. Fusce ut ante sit amet nunc pretium laoreet. 
                                                        Etiam laoreet lacus ac mi consectetur faucibus.
                                                    </p> 
                                                </Card>
                                        </Col>
                                    ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default Projects;