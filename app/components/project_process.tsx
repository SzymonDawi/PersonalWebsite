'use client';

import {Col, Row} from 'antd';
import { ProcessBlockItem } from '../types/generated';
import ProjectProcessParagraph from './project_process_paragraph';

interface Props {
    items: ProcessBlockItem[];
}

const ProjectProcess = (props: Props) => {
    return(
        <Row justify="center">
            <Col style={{width: "50vw"}}>
                {props.items.map((item) => {
                    if (item.__typename === "ProcessImage"){
                        return <img src={item.process_image.rendition.url}></img>
                    } else if (item.__typename === "ProcessParagraph"){
                        return (
                            <ProjectProcessParagraph 
                                title={item.title} 
                                paragraph={item.paragraph} 
                                image={item.image}/>
                        )
                    } else if (item.__typename === "ProcessTitle"){
                        return <h1 key={item.__typename} >{item.process_title}</h1>
                    }
                })}
            </Col>
        </Row>
    )
}

export default ProjectProcess;