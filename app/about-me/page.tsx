'use client';

import {Col, Row, Grid} from 'antd';

import Title from "../components/title";
import Loader from "../components/loader";
import { useAboutMeQuery } from '../types/generated';

const { useBreakpoint } = Grid;

export default function AboutMe() {
    const { xl } = useBreakpoint();
    const col_width = xl ? "60vw" : "90vw";
    const experience_col_span = xl ? 8 : 12;
    const experience_col_offest = xl ? 6 : 0;

    const [{ data, fetching, error }] = useAboutMeQuery();

    if (error) return <p>Oh no... {error.message}</p>;

    return ( 
        <Row className="main" style={{height: "100vh"}}>
            <Col span={24}>
                <Title componentCat="aboutMeComponent" title="ABOUT ME" backUrl="/" />

                <Row justify="center" style={{paddingTop:"50px"}}>
                    <a
                    className="about-me-button"
                    href={data?.about_me.resume_download_url} 
                    target="_blank"
                    >Download Resume</a>
                </Row>
                <Row justify="center">
                    <Col style={{width: col_width}}>
                        {fetching && <Loader/>}
                        <Row>
                            <Col span={experience_col_span} offset={experience_col_offest}>
                                {data?.about_me.jobs.map((job, index )=> {
                                    return(
                                    <div key={index} className="Text-left" style={{paddingTop: "50px"}}>
                                        <h1 className='medium-title'>{job.employer}</h1>
                                        {job.roles.map((role, index) => {
                                            return(
                                                <div key={index}>
                                                    <div style={{marginTop: "-20px"}}>
                                                        <h4 className='small-title'>{role.job_title}</h4>
                                                        <p className='small-sub-title' style={{marginTop: "-20px", paddingLeft: "10px"}}>{role.work_period}</p>
                                                    </div>
                                                    <ul>
                                                        {role.achievements.map((achievement, index) => {
                                                            return (
                                                                <li key={index}>
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