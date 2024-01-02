'use client';

import {Col, Row, Card} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useProjectsQuery } from '../types/generated';

export default function Home() {
    const [{ data, fetching, error }] = useProjectsQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Row className="main">
            <Col span={24}>
                <Title componentCat="projectComponent" title="Projects" backUrl="/" />

                <Row justify="center" style={{paddingBottom:"50px", height:"100vh"}}>
                    <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}}>
                        { fetching && <Loader/>}

                        {data?.projects.map(project => {
                            return(
                                <Row key={project.list_view_title}  justify="center" style={{cursor: "pointer", height: "540px", paddingTop:"30px"}}>
                                    <img src={project.list_view_image.rendition.url}></img>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}