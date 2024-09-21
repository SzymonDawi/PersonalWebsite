'use client';

import { Skeleton, Tree } from 'antd';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';
import {decode} from 'base-64';
import ReactMarkdown from 'react-markdown';
import display_style from './project_git_repo_style';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Loader from './loader';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import styles from '../styles/project_page_git_repo.module.css';


const {DirectoryTree} = Tree;
const gitHub = new Octokit();


interface Props {
    owner: string;
    repo: string;
    included_dir: string[];
}


const ProjectGitRepo = (props: Props) => {
    const [treeData, setTree] = useState([]);    
    const [fetchingRepo, setFetchingRepo] = useState(true);   
    const [errorRepo, setErrorRepo] = useState(false);   
    const [githubLink, setGithubLink] = useState("");

    const [file, setFile] = useState("");    
    const [fetchingFile, setFetchingFile] = useState(true);   
    const [errorFile, setErrorFile] = useState(false);   
    const GITHUB_BASE_URL = "https://github.com/";
    
    async function fetchRepo(owner: string, repo: string) {
        var res = await gitHub.request('GET /repos/{owner}/{repo}/git/trees/main?recursive=true', {
            owner: owner,
            repo: repo,
            });
        return res;
    }
    
    async function fetchFile(owner: string, repo: string, path: string, type: string) {
        var res = await gitHub.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: owner,
            repo: repo,
            path: path,
            header: {
                    "Accept": "application/vnd.github.v3.raw"
                }
            });

            let content;
            let raw_data = (res.data as any)

            if(type === "md"){
                content = decode(raw_data.content);
            }else{
                content = "```" + type + decode(raw_data.content) + " ```";
            }
            return content;
    }
    
    function getChildren(input: any, pos: string, parent_path: string): any{
        let children = [];
        let current_pos = 0;
        let include = false;

        for (let path of props.included_dir){
            if (parent_path.includes(path) || parent_path === ""){
                include = true;
                break;
            } 
        }

        if (!include){
            return ["HIDE"];
        }

        for (const [key, value] of Object.entries(input)) {
            let children_list = getChildren(value, pos + "-" + current_pos, parent_path + "/" + key);
            if (children_list[0] === "HIDE"){
                continue;
            }else{
                children.push({"title": key, 
                    "children": children_list,
                    "key": pos + "-" + current_pos, 
                    "isLeaf": children_list.length == 0 ?  true : false, 
                    "path": parent_path + "/" + key});
                current_pos += 1;
            }
        }
        return children;
    }

    useEffect(() => {
        let repo_res = fetchRepo(props.owner, props.repo);
        setGithubLink(GITHUB_BASE_URL + props.owner + "/" + props.repo);

        repo_res.catch(value => {
            setErrorRepo(true);
            console.log("error");
        });
    
        repo_res.then(value => {
            let result = {}
            let paths = value.data.tree
            paths.forEach((p: any) => p.path.split('/').reduce((o: any, k: any) => o[k] = o[k] || {}, result));
            setTree(getChildren(result, "0", ""));
        });
        setFetchingRepo(false);

        setFetchingFile(true);
        let file_res = fetchFile(props.owner, props.repo, "/README.md", "md");
        file_res.catch(value => {
            setErrorFile(true);
        })

        file_res.then(value => {
            setFile(value)
        })
        setFetchingFile(false);
        
    }, [])

    function onSelect(keys: any, info: any): any {
        if (!info.node.isLeaf){ 
        }else{
            setFetchingFile(true);
            var type = "md";
            if(info.node.title.search(".tsx") != -1 || info.node.title.search(".ts") != -1 ){
                type = "ts";
            }else if(info.node.title.search(".js") != -1 ){
                type = "js";
            }else if(info.node.title.search(".css") != -1){
                type =  "css";
            }else if(info.node.title.search(".py") != -1){
                type = "py"
            }
            let res = fetchFile(props.owner, props.repo, info.node.path, type);
            res.then(value => {
                setFile(value);
                setFetchingFile(false);
            })
        }
    }

    return(
        <div className={styles.container}>
            <a className="small-link" target="_blank" href={githubLink} style={{textDecoration: "underline"}}>Github repo</a>
            <div className={styles.repoContainer}>
                <div className={styles.docTree}>
                    {fetchingRepo &&  <Skeleton  loading={true} />}
                    {!errorRepo && !fetchingRepo && <DirectoryTree onSelect={onSelect} style={{backgroundColor: "#faf8fa"}} multiple treeData={treeData}/>}
                </div>
                <div className={styles.codeDoc}>
                    {fetchingFile && <Loader/>}
                    {!fetchingFile && <ReactMarkdown
                    components={{
                        code(props) {
                        const {children, className, node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')

                        return match ? (
                            <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            language={match[1]}
                            // eslint-disable-next-line
                            // @ts-expect-error
                            style={display_style}
                            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                        ) : (
                            <code {...rest} className={className}>
                            {children}
                            </code>
                        )
                        }
                    }}>{file}</ReactMarkdown>}
                </div>
            </div>
        </div>
    )
}

export default ProjectGitRepo;