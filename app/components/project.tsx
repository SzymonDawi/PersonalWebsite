'use client';

import Title from './title';
import { useProjectQuery } from '../types/generated';
import Loader from "../components/loader";
import ProjectHero from './project_hero';
import ProjectBody from './project_body';
import GraphqlError from '../components/graphql_error';
import styles from "../styles/project_page.module.css";

interface Props {
    slug: string;
}

const Project = (props: Props) => {
    const [{ data, fetching, error }] = useProjectQuery({variables: {Slug: props.slug}});
    
    if (error) return <GraphqlError />;
    if (fetching) return <Loader/>;
    const project = data?.project

    return(
        <div>
            <Title componentCat="projectComponent" title={project!.title} backUrl="/projects" />
            <div className={styles.projectContainer}>
                <ProjectHero 
                    title={project?.hero_title!} 
                    description={project?.hero_description!}
                    bullet_title={project?.hero_bullet_title}
                    bullets={project?.hero_bullets}
                    image_url={project?.hero_image.rendition.url!}
                />
                <ProjectBody items={project?.body!}/>
            </div>
            <img className={styles.backgroundImage} src={project?.hero_image.rendition.url}></img>
        </div>
    )
}

export default Project;