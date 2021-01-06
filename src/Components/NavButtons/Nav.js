import React, { Component } from 'react';
import {Col, Row} from 'antd';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Pillar from "../Pillar";
import Projects from "../Projects";

class Nav extends Component{
    constructor(props) {
        super(props);
        
        this.state ={
            ColSize: { col1: 8, col2: 8, col3:8},
            ColColour: {col1: "#F36870", col2: "#FFF593", col3: "#74B2D0"},
            ToggleState: true,
        }
      }

    changeColSize = (Id, size) =>{
        var altSize = Math.floor((24-size)/2);

        if(Id < Object.keys(this.state.ColSize).length){
            console.log(Id);
        console.log(size);
            if(Id === 0){
                this.setState({ColSize: {col1: size, col2: altSize, col3: altSize}});
            }else if(Id === 1){
                this.setState({ColSize: {col1: altSize, col2: size, col3: altSize}});
            }else{
                this.setState({ColSize: {col1: altSize, col2: altSize, col3: size}});
            }
        }
    }

    toggleGreating = () => {
        this.props.toggleGreating(this.state.ToggleState);
        this.setState({ToggleState: false});
    }
    
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/Projects">
                            <Projects></Projects>
                        </Route>
                        <Route path="/">
                            
                        <Row style={{height: "100vh"}}>
                        <Col span={this.state.ColSize.col1} style={{backgroundColor: this.state.ColColour.col1}} onClick={this.toggleGreating}>
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
                            <Pillar 
                            ChangeSize={this.changeColSize} 
                            Id={1} 
                            BackgroundColor={this.state.ColColour.col2}
                            Title="Art"
                            ></Pillar> 
                        </Col>

                        <Col span={this.state.ColSize.col3} style={{backgroundColor: this.state.ColColour.col3}}>
                            <Pillar
                            ChangeSize={this.changeColSize} 
                            Id={2} 
                            BackgroundColor={this.state.ColColour.col3}
                            Title="About me"
                            ></Pillar> 
                        </Col>
                    </Row>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Nav;