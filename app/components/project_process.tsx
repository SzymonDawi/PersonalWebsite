'use client';

import {Col, Row } from 'antd';
import { ProcessBlockItem } from '../types/generated';
import ProjectProcessParagraph from './project_process_paragraph';
import useCustomBreakPoints from './custom_breakpoints';


interface Props {
    items: ProcessBlockItem[];
}

const ProjectProcess = (props: Props) => {
    const { xl } = useCustomBreakPoints();

    // col width: half-width 90vw full-width 50vw
    const col_width = xl ? "50vw" : "90vw";
  
    return(
        <Row justify="center">
            <Col style={{width: col_width}}>
                {props.items.map((item, index) => {
                    if (item.__typename === "ProcessImage"){
                        // eslint-disable-next-line
                        // @ts-expect-error
                        return <img key={index} src={item.process_image.rendition.url} style={{width:"100%"}}></img>
                    } else if (item.__typename === "ProcessParagraph"){
                        return (
                            <ProjectProcessParagraph 
                                key={index}
                                title={item.title!} 
                                paragraph={item.paragraph} 
                                image={item.image!}/>
                        )
                    } else if (item.__typename === "ProcessTitle"){
                        // eslint-disable-next-line
                        // @ts-expect-error
                        return <h1 key={index} >{item.process_title}</h1>
                    }
                })}
            </Col>
        </Row>
    )
}

export default ProjectProcess;