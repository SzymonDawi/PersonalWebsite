'use client';

import parse from 'html-react-parser';

import { Image } from '../types/generated';
import styles from '../styles/project_page_process_paragraph.module.css';

interface Props {
    title: string | undefined;
    paragraph: string;
    image: Image | undefined;
}

const ProjectProcessParagraph = (props: Props) => {
    return (
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.contentContainer}>
                <span className={styles.paragraph}>{parse(props.paragraph)}</span>
                {props.image && 
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={props.image.rendition.url}></img>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectProcessParagraph;