import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

class Projects extends Component{
    constructor(props) {
        super(props);

        this.state ={
            ProjectList: [
                {
                    Name: "Personal Website",
                    Path: "/Projects/PersonalWebsite",
                    Description: "How I designed and built this website, to showcase my art and projects. Using ReactJS I implemented the functionality that I needed.",
                    Redirect: false,
                    Id: "0",
                },
            ],
            RedirectId: -1,
        }
      }

    clickProject = (Id) => {
        this.setState({RedirectId: Id});
    }

    render(){
        if(this.state.RedirectId !== -1){
            return <Redirect push to={this.state.ProjectList[this.state.RedirectId].Path}/> 
        }
        else{
            return(
                <div>
                    <Row style={{height: "100vh"}} >
                        <Col span={24}>
                            <Row style={{backgroundColor: this.props.AccentColour, paddingTop:"20px", height:"150px"} } > 
                                <Col span={5} offset={2}>
                                    <Button ghost type="text" size="large" href="/" style={{marginTop:"35px"}}>
                                        <p className="SubHeading"> <LeftOutlined />Back</p>
                                    </Button>
                                </Col>
                                <Col span={6} offset={2}><p className="Title">Projects</p></Col>
                            </Row>
                            
                            <Row justify="center"  style={{backgroundColor: this.props.BackgroundColour, paddingBottom:"50px"}}>
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
                                                    onClick={e => this.clickProject(Src.Id)}
                                                >   
                                                    <p className="SubHeading"> {Src.Name}</p>
                                                    <p>
                                                        {Src.Description}
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