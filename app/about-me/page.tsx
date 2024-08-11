'use client';

import {Col, Row, Grid, Card} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useAboutMeQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';

const { Meta } = Card;
const { useBreakpoint } = Grid;

export default function AboutMe() {
    const { xl } = useBreakpoint();
    const experience_col_span = xl ? 10: 12;
    const center_offset = xl? 8 : 5;

    const [{ data, fetching, error }] = useAboutMeQuery();

    return ( 
        <Row className="main" style={{height: "100vh"}} justify="center">
            <Col span={24}>
                <Title componentCat="aboutMeComponent" title="ABOUT ME" backUrl="/"/>
                <Row justify="center" style={{marginTop: "50px"}}>
                { error && <GraphqlError /> }
                { fetching && <Loader/> }
                    <Col span={16}>
                        {data?.about_me.jobs.map((job, index )=> {
                            return(
                                <div key={index}>
                                    <Row style={{marginBottom: "-20px"}}>
                                        <Col offset={center_offset}>
                                            <h1 className='medium-title'>{job.employer}</h1>
                                        </Col>
                                    </Row>
                                    {job.roles.map((role, index) => {
                                        let has_projects = false;
                                        if (role.projects && role.projects?.length > 0) {
                                            has_projects = true;
                                        }
                                        return( 
                                            <div key={index} style={{ marginBottom: "10px" }}>
                                                <Row>
                                                    <Col span={experience_col_span} offset={center_offset}>
                                                        <Row>
                                                            <div style={{marginTop: "-20px"}}>
                                                                <h4 className='small-title'>{role.job_title}</h4>
                                                                <p className='small-sub-title' style={{marginTop: "-20px", marginLeft: "10px"}}>{role.work_period}</p>
                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <ul style={{marginBottom: 0}}>
                                                                {role.achievements.map((achievement, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <p className="P-Lato" style={{marginTop: "-15px"}}>
                                                                                {achievement}
                                                                            </p>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                {has_projects && 
                                                    <div>
                                                        <Row style={{marginBottom: "10px"}}>
                                                            <Col offset={center_offset}>
                                                                <div className='small-title'>Projects:</div>
                                                            </Col>
                                                        </Row>
                                                        <Row justify="center" gutter={[20, 16]} style={{marginBottom: "20px"}}>
                                                            {role.projects?.map((project, index) => {
                                                                return (
                                                                    <Col key={index}>
                                                                        <a href={project?.link} target="_blank">
                                                                            <Card key={index} 
                                                                            style={{
                                                                                borderTopRightRadius: 0, 
                                                                                borderTopLeftRadius: 0, 
                                                                                borderBottomLeftRadius: 0, 
                                                                                borderBottomRightRadius: "15px"}}
                                                                            size="small"
                                                                            cover={<img src={project?.image.rendition.url} height={200} width={200}/>}
                                                                            className="work-porject-card"
                                                                            bodyStyle={{paddingTop: "5px", paddingLeft: 0, paddingRight: 0, paddingBottom: 5}}
                                                                            >
                                                                                <Meta style={{marginLeft: "10px"}} className="small-title" title={project?.label} />
                                                                            </Card >
                                                                        </a>
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                            </div>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}