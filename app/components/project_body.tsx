'use client';

import {Col} from 'antd';
import ProjectProcess from './project_process';
import ProjectFigma from './project_figma';
import ProjectGitRepo from './project_git_repo';


interface Props {
    items: any[];
}

const ProjectBody = (props: Props) => {
    return(
        <Col style={{width: "70vw", paddingBottom: "100px"}}>
            {props.items.map((item) => {
                if (item.__typename === "ProcessBlock"){
                    return <ProjectProcess key={item.__typename} items={item.items!}/>
                }
                else if (item.__typename === "FigmaBlock") {
                    return <ProjectFigma key={item.__typename} url={item.url} />
                } else if (item.__typename === "GithubBlock"){
                    return <ProjectGitRepo key={item.__typename} owner={item.owner} repo={item.repo}/>
                }
                else {
                    return <p key={item.__typename}>Test2</p>
                }
            })}
        </Col>
    )
}

export default ProjectBody;