'use client';

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
                <h3 style={{textAlign: "left"}}>{props.title}</h3>
            </Row>
            <Row style={{marginTop: "-20px"}}>
                <Col span={col_size}>
                    <p className="P-Lato">{props.paragraph}</p>
                </Col>
                {props.image && <Col span={col_size}><img src={props.image.rendition.url}></img></Col>}
            </Row>
        </div>
    )
}

export default ProjectProcessParagraph;