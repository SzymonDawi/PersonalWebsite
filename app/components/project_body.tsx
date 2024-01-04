'use client';

import {Col, Row} from 'antd';
import { ProjectStreamBlock } from '../types/generated';
import ProjectProcess from './project_process';
import ProjectFigma from './project_figma';

interface Props {
    items: ProjectStreamBlock[];
}

const ProjectBody = (props: Props) => {
    return(
        <Row justify="center" style={{marginTop: "-500px"}}>
            <Col>
                {props.items.map((item) => {
                    if (item.__typename === "ProcessBlock"){
                        return <ProjectProcess key={item.__typename} items={item.items}/>
                    }
                    else if (item.__typename === "FigmaBlock") {
                        
                        return <ProjectFigma url={item.url} />
                    }
                    else {
                        return <p key={item.__typename}>Test2</p>
                    }
                })}
            </Col>
        </Row>
    )
}

export default ProjectBody;