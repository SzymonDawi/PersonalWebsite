import React, { Component } from 'react';
import { Card, Col, Row, Button, } from 'antd';
import { Redirect } from 'react-router-dom';

import Title from '../Title/Title';

class Projects extends Component{
    constructor(props) {
        super(props);

        this.state ={
            ProjectList: [
                {
                    Name: "Personal Website",
                    Path: "/projects/personalwebsite",
                    Description: "I designed and built this website to showcase my engineering projects and art. In the project I learned how to design in figma and imporoved on my ReactJS skills. This project is mostly finished there are some minor improvements that I will be making in the future." ,// "How I designed and built this website, to showcase my art and projects. Using ReactJS I implemented the functionality that I needed.",
                    ImgPath: "/Img/ProjectImg/website_on_laptop.png",
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
                            <Title colour={this.props.AccentColour} title="Projects" backUrl="/" />
                            
                            <Row justify="center"  style={{backgroundColor: this.props.BackgroundColour, paddingBottom:"50px"}}>
                                <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}}>
                                    
                                    {this.state.ProjectList.map((Src) => (

                                        <Row justify="center" style={{height: "300px", paddingTop:"30px"}}>
                                            <Card
                                                bordered={false}
                                                style={{backgroundColor: this.props.BackgroundColour, width: "100%", height:"100%", cursor: "pointer" , borderRadius: "25px", border: "5px solid " + this.props.AccentColour}}
                                                onClick={e => this.clickProject(Src.Id)}
                                            >   
                                                <Row>
                                                    <Col span={16}>
                                                    <p className="SubHeading"> {Src.Name}</p>
                                                    <p className="P-Lato">
                                                        {Src.Description}
                                                    </p> 

                                                    </Col>
                                            
                                                    <Col lg={{span: 8}} md={{span: 0}} xs={{span: 0}}>
                                                        <img src={Src.ImgPath} style={{width: "300px", marginTop:"-50px"}}></img>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Row>
                                    ))}

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