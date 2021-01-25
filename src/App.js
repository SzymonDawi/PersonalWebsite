import './App.css';
import React, { Component } from 'react';
import {Col, Row, Card, Avatar} from 'antd';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';

import Pillar from "./Components/Pillar";
import Projects from "./Components/Projects";
import Greating from "./Components/Greating";
import Art from "./Components/Art";
import AboutMe from "./Components/AboutMe";
import PersonalSite from "./Components/PersonalSite";
import JobRedirect from "./Components/JobRedirect";

class App extends Component{
  constructor(props) {
    super(props);
    
    this.state ={
      Colsize: 15,
      ColSize: { col1: 8, col2: 8, col3:8},
      ColColour: {col: "#FAFAF0", col1: "#f98ba9", col2: "#fdd77c", col3: "#5ed3da"},
      JobLinks: ["/6cbuKvAR","/Km6ZjB67","/Nr5mmBdC","/z4aRyuau"],
      JobLinksOpened: [], 
    }
  }

  linkVisited = (Link) =>{
    this.state.JobLinksOpened.push(Link);
    {console.log(Link)}
    {console.log(this.state.JobLinksOpened)}
  }

  render(){
    return (
      <div className="App ">
            <Router>
              <Switch>
                <Route exact path="/Projects">
                  <Projects BackgroundColour={this.state.ColColour.col} AccentColour={this.state.ColColour.col1}></Projects>
                </Route>
                
                <Route path="/Art">
                  <Art BackgroundColour={this.state.ColColour.col} AccentColour={this.state.ColColour.col2}></Art>
                </Route>

                <Route path="/AboutMe">
                  <AboutMe BackgroundColour={this.state.ColColour.col3}></AboutMe>
                </Route>

                <Route path="/Projects/PersonalWebsite">
                    <PersonalSite BackgroundColour={this.state.ColColour.col} AccentColour={this.state.ColColour.col1}></PersonalSite>
                </Route>     

                {this.state.JobLinks.map((link) => (
                  <Route exact path={link}>
                    <JobRedirect Link={link} linkVisited={this.linkVisited}></JobRedirect>
                  </Route>     
                ))}

                <Route exact path="/">
                  <Row style={{height: "100vh"}} >
                    <Col span={9} style={{backgroundColor: "#FAFAF0"}}> 
                      <Greating></Greating>
                    </Col>
                    <Col span={this.state.Colsize} style={{backgroundColor: "#85D2D0"}}>  
                      <Row style={{height: "100vh"}}>
                        <Col span={this.state.ColSize.col1} style={{backgroundColor: this.state.ColColour.col1}} >
                            <NavLink
                                to="/Projects"
                                activeClassName="selected">
                                <Pillar                         
                                    ChangeSize={this.changeColSize} 
                                    Id={0} 
                                    BackgroundColour={this.state.ColColour.col1}
                                    Title="Projects"
                                    >
                                    
                                </Pillar>    
                            </NavLink>
                        </Col>

                        <Col span={this.state.ColSize.col2} style={{backgroundColor: this.state.ColColour.col2}}>
                          <NavLink
                              to="/Art"
                              activeClassName="selected">
                              <Pillar                         
                                  ChangeSize={this.changeColSize} 
                                  Id={1} 
                                  BackgroundColour={this.state.ColColour.col2}
                                  Title="Art">
                              </Pillar>    
                          </NavLink>
                        </Col>

                        <Col span={this.state.ColSize.col3} style={{backgroundColor: this.state.ColColour.col3}}>
                          <NavLink
                              to="/AboutMe"
                              activeClassName="selected">
                              <Pillar                         
                                  ChangeSize={this.changeColSize} 
                                  Id={2} 
                                  BackgroundColour={this.state.ColColour.col3}
                                  Title="AboutMe">
                              </Pillar>    
                          </NavLink>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Route>
              </Switch>
            </Router>
          
      </div>
    );
  }
}

export default App;
