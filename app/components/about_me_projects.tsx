'use client';

import {
    Card,
    CardTitle,
    CardImage,
} from "../components/ui/card";
import styles from "../styles/about_me_projects.module.css";
import {AboutMeQuery} from '../types/generated';

type Project = NonNullable<NonNullable<NonNullable<AboutMeQuery['about_me']>['jobs']>[number]['roles'][number]['projects']>[number];

interface Props {
    projects: Project[] | null | undefined;
}

export default function AboutMeProjects(props: Props) {

    if (!props.projects || props.projects?.length < 1) return

    return ( 
        <div>
            <h4 className={styles.title}>Projects:</h4>
            <div className={styles.projectsContainer}>
                {props.projects.map((project, index) => {
                    return(
                        <div key={index} className={styles.project}>
                            <Card className={styles.project}>
                                <CardImage src={project?.image.rendition.url}></CardImage>
                                <CardTitle className={styles.projectTitle}>{project?.label}</CardTitle>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}