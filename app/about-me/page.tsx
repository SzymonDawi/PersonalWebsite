'use client';

import {Col, Row, Grid, Button} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useAboutMeQuery } from '../types/generated';

const { useBreakpoint } = Grid;

export default function AboutMe() {
    const { xl } = useBreakpoint();
    const col_width = xl ? "60vw" : "90vw";

    const [{ data, fetching, error }] = useAboutMeQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Row className="main" >
            <Col span={24}>
                <Title componentCat="aboutMeComponent" title="About Me" backUrl="/" />

                <Row justify="center" style={{paddingTop:"50px"}}>
                    <Button href="">Download Resume</Button>
                </Row>
                <Row justify="center">
                    <Col style={{width: col_width}}>
                        {fetching && <Loader/>}
                        <Row>
                            <Col span={6} offset={6}>
                                {data?.about_me.jobs.map(job => {
                                    return(
                                    <div className="Text-left" style={{paddingTop: "50px"}}>
                                        <h1 className='medium-title'>{job.employer}</h1>
                                        {job.roles.map(role => {
                                            return(
                                                <div>
                                                    <div style={{marginTop: "-20px"}}>
                                                        <h4 className='small-title'>{role.job_title}</h4>
                                                        <p className='small-sub-title' style={{marginTop: "-20px", paddingLeft: "10px"}}>{role.work_period}</p>
                                                    </div>
                                                    <ul>
                                                        {role.achievements.map(achievement => {
                                                            return (
                                                                <li>
                                                                    <p className="P-Lato" style={{marginTop: "-15px", paddingBottom: "5px"}}>
                                                                        {achievement}
                                                                    </p>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
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