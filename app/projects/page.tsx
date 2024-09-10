'use client';

import Link from 'next/link';

import Title from "../components/title";
import Loader from "../components/loader";
import { useProjectsQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';
import styles from "../styles/projects_page.module.css";

export default function Home() {
    const [{ data, fetching, error }] = useProjectsQuery();

    return (
        <div>
            <Title componentCat="projectComponent" title="PROJECTS" backUrl="/" />
            { fetching && <Loader /> }
            { error && <GraphqlError/> }
            <div className={styles.projectsContainer}>
                {data?.projects.map((project, index) => {
                    const project_url = "/project/" + project.slug;
                    return(
                        <div key={index}>
                            <Link href={project_url}>
                                <img className={styles.image} src={`http://localhost:8000/${project.list_view_image.rendition.url}`}></img>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}