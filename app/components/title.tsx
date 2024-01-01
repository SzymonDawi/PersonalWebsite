'use client';

import {Col, Row, Button} from 'antd';
import { LeftOutlined } from '@ant-design/icons';

interface Props {
    componentCat: string;
    backUrl: string;
    title: string;
}

const Title = (props: Props) => {

    return(
        <Row className={props.componentCat} style={{height:"75px"} }> 
            <Col span={5} offset={2}>
                <Button ghost type="text" size="large" href={props.backUrl} style={{marginTop:"20px"}}>
                    <p className="SubHeading"> <LeftOutlined />Back</p>
                </Button>
            </Col>
            <Col span={6} offset={2}><p className="Title">{props.title}</p></Col>
        </Row>
    )
}

export default Title;