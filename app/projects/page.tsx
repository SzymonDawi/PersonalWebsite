'use client';

import {Col, Row, Grid} from 'antd';

import Link from 'next/link';

import Title from "../components/title";
import Loader from "../components/loader";
import { useProjectsQuery } from '../types/generated';


const { useBreakpoint } = Grid;


export default function Home() {
    const { sm } = useBreakpoint();
    const [{ data, fetching, error }] = useProjectsQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    const use_mobile_image = sm ? false : true;

    return (
        <Row className="main">
            <Col span={24}>
                <Title componentCat="projectComponent" title="Projects" backUrl="/" />

                <Row justify="center" style={{paddingBottom:"50px", height:"100vh"}}>
                    <Col xxl={{span:12}} xl={{span:18}} lg={{span: 18}} md={{span: 12}} sm={{span: 15}} xs={{span: 15}}>
                        {fetching && <Loader/>}

                        {data?.projects.map(project => {
                            const project_url = "/project/" + project.slug;
                            const image = use_mobile_image ? project.mobile_list_view_image : project.list_view_image
                            return(
                                <Row key={project.slug}  justify="center" style={{cursor: "pointer", height: image.rendition.height, width: image.rendition.width, paddingTop:"30px"}}>
                                    <Link href={project_url}>
                                        <img src={image.rendition.url}></img>
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