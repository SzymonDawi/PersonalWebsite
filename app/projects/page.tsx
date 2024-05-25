'use client';

import {Col, Row} from 'antd';

import Link from 'next/link';

import Title from "../components/title";
import Loader from "../components/loader";
import { useProjectsQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';

export default function Home() {
    const [{ data, fetching, error }] = useProjectsQuery();

    return (
        <Row className="main">
            <Col span={24}>
                <Title componentCat="projectComponent" title="PROJECTS" backUrl="/" />
                { error && <GraphqlError /> }
                <Row justify="center" style={{paddingBottom:"50px", height:"100vh"}}>
                    <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 8}} xs={{span: 8}}>
                        { fetching && <Loader/>}

                        {data?.projects.map(project => {
                            const project_url = "/project/" + project.slug;
                            return(
                                <Row key={project.slug}  justify="center" style={{cursor: "pointer", height: "540px", paddingTop:"30px"}}>
                                    <Link href={project_url}>
                                        <img src={project.list_view_image.rendition.url}></img>
                                    </Link>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}