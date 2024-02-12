'use client';

import parse from 'html-react-parser';

import {Col, Row} from 'antd';
import { Image } from '../types/generated';

interface Props {
    title: string | undefined;
    paragraph: string;
    image: Image | undefined;
}

const ProjectProcessParagraph = (props: Props) => {
    let col_size: number = 12;
    if (props.image === null) {
        col_size = 24;
    }

    return (
        <div>
            <Row>
                <h3 style={{textAlign: "left", marginBottom: "-10px"}}>{props.title}</h3>
            </Row>
            <Row gutter={[100,0]} align="top">
                <Col sm={{span: 24}} md={{span: col_size}}>
                    {parse(props.paragraph)}
                </Col>
                {props.image && <Col span={col_size}><img src={props.image.rendition.url} style={{width:"100%"}}></img></Col>}
            </Row>
        </div>
    )
}

export default ProjectProcessParagraph;