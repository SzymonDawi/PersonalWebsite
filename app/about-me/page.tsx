'use client';

import Title from "../components/title";
import Loader from "../components/loader";
import { useAboutMeQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';
import styles from "../styles/about_me_page.module.css";
import AboutMeRoles from "../components/about_me_roles";

export default function AboutMe() {
    const [{ data, fetching, error }] = useAboutMeQuery();

    return ( 
        <div>
            <Title componentCat="aboutMeComponent" title="ABOUT ME" backUrl="/"/>
            { error && <GraphqlError /> }
            { fetching && <Loader/> }
            <div className={styles.contentContainer}>
                {data?.about_me.jobs.map((job, index) => {
                    return (
                        <div key={index} >
                            <h1 className={styles.employer}>{job.employer}</h1>
                            <AboutMeRoles roles={job.roles}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}