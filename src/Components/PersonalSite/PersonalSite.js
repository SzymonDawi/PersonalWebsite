import React, { Component } from 'react';
import {Col, Row,} from 'antd';

import GitRepo from '../GitRepo';
import Title from '../Title/Title';

class PersonalSite extends Component{
    constructor(props) {
        super(props);

        this.state ={
            repoData: {
                owner: "SzymonDawi",
                repo: "PersonalWebsite",
                sha: "271eef70a8bfd866b1dfa5549b659701502aeef1",
                fileDir: {
                    
                }
            },
        }
      }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Title colour={this.props.AccentColour} title="Personal Website" backUrl="/#/projects"/>

                        <Row align="middle" justify="center" style={{backgroundColor: this.props.BackgroundColour}}>

                            <Col span={10} style={{paddingLeft:"50px"}}>
                                <Row align="middle">
                                    <Col align="left" span={24}><p className="SubHeading-Lato" >Aim:</p></Col>
                                    <Col align="left" span={24}>
                                        <p className="P-Lato" style={{marginTop: "-35px", paddingLeft: "50px"}}> 
                                            To build a personal website for showcasing my art and engineering projects using ReactJS.
                                        </p>
                                    </Col>
                                </Row>
                                <Row align="middle"> 
                                    <Col align="left" span={24}><p className="SubHeading-Lato">What I Learned:</p></Col>
                                    <Col align="left" span={24}>
                                        <p className="P-Lato" style={{marginTop: "-35px", paddingLeft: "50px"}}> 
                                            How to design a mockup using figma. <br></br>
                                            How to effectivly use third party packages. <br></br>
                                            How to implement features in Reactjs. <br></br>
                                            How to deploy a reactJS website.    <br></br>
                                        </p> 
                                    </Col>   
                                </Row>
                                <Row align="middle"> 
                                    <Col align="left" span={24}><p className="SubHeading-Lato">Next Steps:</p></Col>
                                    <Col align="left" span={24}>
                                        <p className="P-Lato" style={{marginTop: "-35px", paddingLeft: "50px"}}> 
                                            Make the site mobile friendly. <br></br>
                                            Add a backend for storing project and art paths/descriptions/tags.<br></br>
                                            Add search functionality to the project page, so you can search projects for certain tags.<br></br>
                                            Optimise the github api calls.
                                        </p> 
                                    </Col>   
                                </Row>
                            </Col>

                            <Col lg={{span: 8}} md={{span: 0}} xs={{span: 0}}>
                                <img src="/Img/ProjectImg/website_on_laptop.png" style={{width: "600px", marginLeft:"50px"}}></img>
                            </Col>
                        </Row>
                        
                        <Row id="design" justify="center" style={{backgroundColor:this.props.BackgroundColour}}>
                            <Col>
                                <Row justify="center"> <p className="SubHeading-Lato">Website mockup</p></Row>
                                <Row justify="center" >
                                    <Col span={13}>
                                        
                                        <Row justify="center"> <p className="SubSubHeading-Lato">Old site</p></Row>
                                        <Row justify="center" style={{marginTop:"-25px"}}> 
                                            <Col span={21}>
                                                <p className="P-Lato">
                                                    My old website was written in mostly HTML with some PHP and JavaScript. It was just a generic website that did not have much colour. 
                                                    I wanted to write a site in ReactJS, so I also decided to overhaul the design. With the previous design I did not plan at all, 
                                                    I just started coding. Having no design plan to reference when coding was detrimental. So with this design update I decided to learn
                                                    how to make website mockup.                   
                                                </p>
                                            </Col>
                                        </Row>
                                        
                                        <Row justify="center"> <p className="SubSubHeading-Lato">New site mockup </p></Row>
                                        <Row justify="center" style={{marginTop:"-25px"}}> 
                                            <Col span={21}>
                                                <p className="P-Lato">
                                                    To create the mockup I used figma. Initailly I did not have a design
                                                    in mind. I just knew that I wanted it to look different from most other personal websites and I wanted it to have more colour. 
                                                    First I needed to find a colour palette that I liked. I used multiple online tools to refine the colour palette.
                                                    I got my initial color palette from canva.com, which was then refined using Colormind.io. Colormind is a website palette generator, 
                                                    I used it by locking in the colours that I liked from Canva and generating new colours with Colormind. 
                                                </p>
                                                <p className="P-Lato">
                                                    When designing the site I wanted it to look different, I wanted it to be memorable. I started with the nav menu.
                                                    Every website basically has the same nav menu bar at the top. This is probably because its the best solution and doesn't confuse the 
                                                    sites visitors. However, since my site is small and doesn't have many pages, I decided that having a different nav menu would be okay. 
                                                    My Nav menu only shows up on the main page. On the sub pages you have to click the back button to get back to the main page. I have 
                                                    three parts to my website; Projects, Art, and About me. Each of these parts have their own colour assosiated wtih them.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col span={10}>
                                        <Row justify="center" style={{width: "774px"}}>
                                            <img style={{width: "774px", height:"432"}} src="/Img/ProjectImg/oldSite.png" />
                                        </Row>
                                    </Col>
                                </Row>

                                <Row justify="center" style={{height:"800px", paddingTop:"25px", paddingBottom:"25px"}}>
                                    <iframe 
                                        title='figma'
                                        style={{border: "0px", margingleft:"15px", marginRight:"-15px"}}
                                        width="90%" 
                                        height="100%" 
                                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzVDFQvUYGX8Zn0Me5SQyxh%2FPersonal-Site%3Fnode-id%3D0%253A1" 
                                        >
                                    </iframe>
                                </Row>
                            </Col>
                        </Row>

                        <Row justify="center" style={{paddingTop: "25px", paddingBottom:"50px"}} >
                            <Col>
                                <Row justify="center"> <p className="SubHeading-Lato">Implementation</p></Row>
                                <Row >
                                    <GitRepo repoData={this.state.repoData}></GitRepo>
                                </Row>
                                
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default PersonalSite;