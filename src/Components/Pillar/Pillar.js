import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;
class Pillar extends Component{
    constructor(props) {
        super(props);

      }
    
    hover = () =>{
        //this.props.ChangeSize(this.props.Id, 10);
    }
    
    notHover = () => {
        //this.props.ChangeSize(this.props.Id, 8);
    }

    render(){
        return(
            <div onMouseOver={this.hover} onMouseOut={this.notHover}>
                <Card 
                bordered = {false}
                hoverable
                style={{
                    height: "100vh", 
                    backgroundColor: this.props.BackgroundColor,
                    paddingTop: "31vh",
                }}
                >
                    <Meta title={<span className="a1">{this.props.Title} </span> }/>
                </Card>
            </div>
        );
    }
}

export default Pillar;