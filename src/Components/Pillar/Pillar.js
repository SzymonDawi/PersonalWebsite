import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;
class Pillar extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <div onMouseOver={this.hover} onMouseOut={this.notHover}>
                <Card 
                bordered = {false}
                hoverable
                style={{
                    height: "100vh", 
                    backgroundColor: this.props.BackgroundColour,
                    paddingTop: "40vh",
                }}
                >
                    <Meta title={<span className="Title">{this.props.Title} </span> }/>
                </Card>
            </div>
        );
    }
}

export default Pillar;