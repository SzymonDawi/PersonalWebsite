'use client';

import {Col, Row, Grid} from 'antd';
import Bullets from './bullets';

const { useBreakpoint } = Grid;

interface Props {
    title: string;
    description: string;
    bullet_title: string | undefined;
    bullets: string[] | undefined;
    image_url: string;
}

const ProjectHero = (props: Props) => {
    const { lg } = useBreakpoint();

    // col width: half-width 45vw full-width 30vw
    const col_width = lg ? "30vw" : "45vw";

    return(
        <Row justify="center" style={{paddingTop: "50px"}}>
            <Col style={{width: col_width}}>
                <h1>{props.title}</h1>
                <p className="P-Lato">{props.description}</p>
                
                <Bullets title={props.bullet_title} items={props.bullets}/>
            </Col>
        </Row>
    )
}

export default ProjectHero;