'use client';

import {Row} from 'antd';

interface Props {
    url: string | undefined;
}

const ProjectFigma = (props: Props) => {
    return (
        <Row justify="center" style={{height:"800px", width: "1500px", paddingTop:"25px", paddingBottom:"25px"}}>
            <iframe 
                title='figma'
                style={{border: "0px", marginLeft:"15px", marginRight:"-15px"}}
                width="100%" 
                height="100%" 
                src={props.url}>
            </iframe>
        </Row>
    )
}

export default ProjectFigma;