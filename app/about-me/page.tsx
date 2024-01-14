'use client';

import {Col, Row, Grid} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useAboutMeQuery } from '../types/generated';

const { useBreakpoint } = Grid;

export default function Art() {
    const { xl } = useBreakpoint();
    const col_width = xl ? "60vw" : "90vw";

    const [{ data, fetching, error }] = useAboutMeQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Row className="main" >
            <Col span={24}>
                <Title componentCat="aboutMeComponent" title="About Me" backUrl="/" />

                <Row justify="center" style={{paddingTop:"150px"}}>
                    <Col style={{width: col_width}}>
                        {fetching && <Loader/>}
                        <Row>
                            <Col span={5} offset={8}>
                                {data?.about_me.jobs.map(job => {
                                    return(
                                    <div className="Text-left" style={{paddingTop: "50px"}}>
                                        <h1>{job.employer}</h1>
                                        {job.roles.map(role => {
                                            return(
                                                <div>
                                                    <h4>{role.job_title}</h4>
                                                    <h4>{role.work_period}</h4>
                                                    {role.achievements.map(achievement => {
                                                        return<p>{achievement}</p>
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    )
                                })}
                            </Col>
                            <Col span={9}>
                                <img src={data?.about_me.image.rendition.url}></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}