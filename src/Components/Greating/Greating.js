import React, { Component } from 'react';
import {Col, Row, Card, Avatar} from 'antd';

class Greating extends Component{
    constructor(props) {
        super(props);

      }

    render(){
        return(
            <div>
                <Card 
                    bordered = {false}
                    hoverable = {false}
                    style={{
                        height: "100vh", 
                        backgroundColor: "#FAFAF0",
                        paddingTop: "15vh",
                    }}
                    >
                    <Avatar size={256} src="/img/IMG_0939.JPG"></Avatar>
                    <p className="App-greating"> Hello! </p>  
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mauris odio, sed convallis neque pretium ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pretium enim mollis ultrices venenatis. Sed vulputate erat ipsum, sed feugiat justo pellentesque eget. Nulla aliquam nisi tempus porta vulputate. Suspendisse ultrices maximus risus, vel ullamcorper sapien feugiat in. Aliquam ut metus sed turpis pretium feugiat in vitae sapien.

        Nam eleifend consequat accumsan. Nunc id mi augue. Pellentesque malesuada, sem a tempor sagittis, neque elit venenatis tortor, ac consequat lacus nisi id risus. Praesent pretium fermentum tellus ac pretium. In tempor elit nec orci condimentum, id tempor mi lacinia. Cras et tincidunt elit. Integer et efficitur velit.
                    </p>
                </Card>
            </div>
        );
    }
}

export default Greating;