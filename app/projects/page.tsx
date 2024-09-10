'use client';

import Link from 'next/link';

import Title from "../components/title";
import Loader from "../components/loader";
import { useProjectsQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';
import styles from "../styles/projects_page.module.css";
import useCustomBreakPoints from '../components/custom_breakpoints';

export default function Home() {
    const [{ data, fetching, error }] = useProjectsQuery();
    const {lg} = useCustomBreakPoints();

    return (
        <div>
            <Title componentCat="projectComponent" title="PROJECTS" backUrl="/" />
            { fetching && <Loader /> }
            { error && <GraphqlError/> }
            <div className={styles.projectsContainer}>
                {data?.projects.map((project, index) => {
                    const project_url = "/project/" + project.slug;
                    const image_src =  lg ? project.list_view_image.rendition.url : project.mobile_list_view_image.rendition.url
                    return(
                        <div key={index}>
                            <Link href={project_url}>
                                <img className={styles.image} src={image_src}></img>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}