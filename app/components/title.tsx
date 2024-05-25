'use client';

import Link from 'next/link';

import {Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Sideboard } from "../constants";

interface Props {
    componentCat: string;
    backUrl: string;
    title: string;
}

const Title = (props: Props) => {

    return(
        <Row align="middle" className={props.componentCat} style={{height:"75px"}}> 
            <Col span={5} offset={2}>
                <Link className="nav-back-button" href={props.backUrl}>
                    <p className={`${Sideboard.className} sub-title`}> <LeftOutlined /></p>
                </Link>
            </Col>
            <Col span={6} offset={2}>
                <h1 className={`${Sideboard.className} title`}>{props.title}</h1>
            </Col>
        </Row>
    )
}

export default Title;