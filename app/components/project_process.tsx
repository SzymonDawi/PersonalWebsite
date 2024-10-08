'use client';

import { ProcessBlockItem } from '../types/generated';
import ProjectProcessParagraph from './project_process_paragraph';
import styles from '../styles/project_page_process.module.css';


interface Props {
    items: ProcessBlockItem[];
}

const ProjectProcess = (props: Props) => {
    return(
        <div className={styles.container}>
            {props.items.map((item, index) => {
                if (item.__typename === "ProcessImage"){
                    // eslint-disable-next-line
                    // @ts-expect-error
                    return <img className={styles.image} key={index} src={item.process_image.rendition.url}></img>
                } else if (item.__typename === "ProcessParagraph"){
                    return (
                        <ProjectProcessParagraph 
                            key={index}
                            title={item.title!} 
                            paragraph={item.paragraph} 
                            image={item.image!}/>
                    )
                } else if (item.__typename === "ProcessTitle"){
                    // eslint-disable-next-line
                    // @ts-expect-error
                    return <h1 key={index} >{item.process_title}</h1>
                }
            })}
        </div>
    )
}

export default ProjectProcess;