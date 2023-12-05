import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Art extends Component{
    constructor(props) {
        super(props);

      }

    componentDidMount() {
        this.props.linkVisited(this.props.Link);
    }


    render(){
        return(
            <Redirect push to="/"/>  
        );
    }
}

export default Art;