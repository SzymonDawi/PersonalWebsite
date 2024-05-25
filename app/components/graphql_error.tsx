'use client';

import { Col, Row} from 'antd';


const GraphqlError = () => {
    return(
        <Row>
            <Col span={24}>
                <p  style={{paddingTop: "40vh"}} className="sub-title">Oh no! Something is wrong with the server. <br/> We aren&apos;t recieving any data.</p>
            </Col>
        </Row>
    )
}

export default GraphqlError;