'use client';

import {Col, Row} from 'antd';
import Bullets from './bullets';

interface Props {
    title: string;
    description: string;
    bullet_title: string | undefined;
    bullets: string[] | undefined;
    image_url: string;
}

const ProjectHero = (props: Props) => {
    return(
        <Row justify="center" style={{paddingTop: "50px"}}>
            <Col style={{width: "30vw"}}>
                <h1 style={{marginTop:"-150%"}}>{props.title}</h1>
                <p className="P-Lato">{props.description}</p>
                
                <Bullets title={props.bullet_title} items={props.bullets}/>
            </Col>
        </Row>
    )
}

export default ProjectHero;