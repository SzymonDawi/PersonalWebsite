import './App.css';
import React, { Component } from 'react';
import {Col, Row, Card, Avatar} from 'antd';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Pillar from "./Components/Pillar";
import Projects from "./Components/Projects";
import Greating from "./Components/Greating";
import Art from "./Components/Art";
import AboutMe from "./Components/AboutMe";



class App extends Component{
  constructor(props) {
    super(props);
    
    this.state ={
      Colsize: 15,
      ColSize: { col1: 8, col2: 8, col3:8},
      ColColour: {col1: "#F36870", col2: "#FFF593", col3: "#74B2D0"},
    }
  }

  render(){
    return (
      <div className="App ">
            <Router>
              <Switch>
                <Route path="/Projects">
                  <Projects BackgroundColor={this.state.ColColour.col1}></Projects>
                </Route>
                
                <Route path="/Art">
                  <Art BackgroundColor={this.state.ColColour.col2}></Art>
                </Route>

                <Route path="/AboutMe">
                  <AboutMe BackgroundColor={this.state.ColColour.col3}></AboutMe>
                </Route>

                <Route path="/">
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
                                    BackgroundColor={this.state.ColColour.col1}
                                    Title="Projects">
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
                                  BackgroundColor={this.state.ColColour.col2}
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
                                  BackgroundColor={this.state.ColColour.col3}
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
