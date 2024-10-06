'use client';

import Bullets from './bullets';
import styles from '../styles/project_page_hero.module.css';

interface Props {
    title: string;
    description: string;
    bullet_title: string | undefined;
    bullets: string[] | undefined;
    image_url: string;
}

const ProjectHero = (props: Props) => {
    return(
        <div className={styles.heroContainter}>
            <h1 className={styles.title}>{props.title}</h1>
            <p>{props.description}</p>
            <Bullets title={props.bullet_title} items={props.bullets}/>
        </div>
    )
}

export default ProjectHero;