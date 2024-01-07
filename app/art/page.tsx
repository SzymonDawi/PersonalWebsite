'use client';

import {Col, Row, Grid} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useArtQuery } from '../types/generated';

const { useBreakpoint } = Grid;

export default function Art() {
    const { xl } = useBreakpoint();
    const col_width = xl ? "60vw" : "90vw";

    const [{ data, fetching, error }] = useArtQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Row className="main" >
            <Col span={24}>
                <Title componentCat="artComponent" title="Art" backUrl="/" />

                <Row justify="center" style={{paddingBottom:"50px"}}>
                    <Col style={{width: col_width}}>
                        { fetching && <Loader/>}
                        <Row gutter={[40, 40]} style={{paddingTop: "40px"}}>
                            {data?.art.map(art => {
                                return(
                                    <Col key={art.slug} lg={{span:8}} md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <div>
                                            <img src={art.image.rendition.url} style={{width: "100%"}}></img>
                                            <p className="P-Lato" style={{marginTop: "-3px"}}>{art.title}</p>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}