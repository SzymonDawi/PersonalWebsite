'use client';

import ProjectProcess from './project_process';
import ProjectFigma from './project_figma';
import ProjectGitRepo from './project_git_repo';
import styles from '../styles/project_page_body.module.css';

interface Props {
    items: any[];
}

const ProjectBody = (props: Props) => {
    return(
        <div className={styles.container}>
            {props.items.map((item, index) => {
                if (item.__typename === "ProcessBlock"){
                    return <ProjectProcess key={index} items={item.items!}/>
                }
                else if (item.__typename === "FigmaBlock") {
                    return <ProjectFigma key={index} url={item.url} />
                } else if (item.__typename === "GithubBlock"){
                    return <ProjectGitRepo key={index} included_dir={item.dirs_to_include} owner={item.owner} repo={item.repo}/>
                }
                else {
                    return <p key={item.__typename}>Test2</p>
                }
            })}
        </div>
    )
}

export default ProjectBody;