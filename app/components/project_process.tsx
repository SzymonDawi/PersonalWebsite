'use client';

import {Col, Row, Grid} from 'antd';
import { ProcessBlockItem } from '../types/generated';
import ProjectProcessParagraph from './project_process_paragraph';


const { useBreakpoint } = Grid;

interface Props {
    items: ProcessBlockItem[];
}

const ProjectProcess = (props: Props) => {
    const { xl } = useBreakpoint();

    // col width: half-width 90vw full-width 50vw
    const col_width = xl ? "50vw" : "90vw";
  
    return(
        <Row justify="center">
            <Col style={{width: col_width}}>
                {props.items.map((item) => {
                    if (item.__typename === "ProcessImage"){
                        return <img src={item.process_image.rendition.url} style={{width:"100%"}}></img>
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