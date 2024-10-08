'use client';

import styles from '../styles/project_page_figma.module.css';

interface Props {
    url: string | undefined;
}

const ProjectFigma = (props: Props) => {
    return (
        <div className={styles.container}>
            <iframe 
                title='figma'
                style={{border: "0px"}}
                width="100%" 
                height="100%" 
                src={props.url}>
            </iframe>
        </div>
    )
}

export default ProjectFigma;