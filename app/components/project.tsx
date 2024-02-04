'use client';

import {Col, Row} from 'antd';
import Title from './title';
import { useProjectQuery } from '../types/generated';
import Loader from "../components/loader";
import ProjectHero from './project_hero';
import ProjectBody from './project_body';

interface Props {
    slug: string;
}

const Project = (props: Props) => {
    const [{ data, fetching, error }] = useProjectQuery({variables: {Slug: props.slug}});

    if (error) return <p>Oh no... {error.message}</p>;
    if (fetching) return <Row className="main" style={{height:"100vh"}}><Loader/></Row>;
    const project = data?.project

    return(
        <Row className="main" style={{height: "100%"}}>
            <Col span={24}>
                <Title componentCat="projectComponent" title={project?.list_view_title!} backUrl="/projects" />
                <Row justify="center">
                    <Col style={{zIndex: "10"}}>
                        <Row justify="center" style={{paddingTop: "15vh"}}>
                            <Col>
                                <ProjectHero 
                                    title={project?.hero_title!} 
                                    description={project?.hero_description!}
                                    bullet_title={project?.hero_bullet_title}
                                    bullets={project?.hero_bullets}
                                    image_url={project?.hero_image.rendition.url!}
                                />
                            </Col>
                        </Row>
                        <Row justify="center" style={{paddingTop: "25vh"}}>
                            <ProjectBody items={project?.body!}/>
                        </Row>
                    </Col>
                </Row>
                <img src={project?.hero_image.rendition.url} width={"100%"} style={{position: "absolute", top: "75px", left: "0%"}}></img>
            </Col>
        </Row>
    )
}

export default Project;