'use client';

import {Col, Row, Skeleton, Tree} from 'antd';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';
import {decode} from 'base-64';
import ReactMarkdown from 'react-markdown';
import display_style from './project_git_repo_style';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Loader from './loader';


const {DirectoryTree} = Tree;
const gitHub = new Octokit();


interface Props {
    owner: string;
    repo: string;
}


const ProjectGitRepo = (props: Props) => {
    const [treeData, setTree] = useState([]);    
    const [fetchingRepo, setFetchingRepo] = useState(true);   
    const [errorRepo, setErrorRepo] = useState(false);   

    const [file, setFile] = useState("");    
    const [fetchingFile, setFetchingFile] = useState(true);   
    const [errorFile, setErrorFile] = useState(false);   
    
    async function fetchRepo(owner: string, repo: string) {
        var res = await gitHub.request('GET /repos/{owner}/{repo}/git/trees/c7d53362655a850e73f1dedbbc4ed92300081b35?recursive=true', {
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
        for (const [key, value] of Object.entries(input)) {
            let children_list = getChildren(value, pos + "-" + current_pos, parent_path + "/" + key);
            children.push({"title": key, 
                "children": children_list,
                "key": pos + "-" + current_pos, 
                "isDir": children_list.length === 0 ?  false : true, 
                "path": parent_path + "/" + key});
            current_pos += 1;
        }
        return children;
    }

    useEffect(() => {
        let repo_res = fetchRepo(props.owner, props.repo);
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
        setFetchingFile(true);
        if (info.node.isDir){

        }else{
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
                setFile(value)
            })
            setFetchingFile(false);
        }
    }

    return(
        <Row justify="center" style={{ backgroundColor: "#faf8fa", width: "100%"}}>
            <Col className="Scroll-y" span={5} style={{borderRightStyle: "solid", borderColor: "#3E343C", backgroundColor: "#faf8fa", height:"60vh", paddingBottom: "100px"}}>
                {fetchingRepo &&  <Skeleton  loading={true} />}
                {!errorRepo && !fetchingRepo && <DirectoryTree onSelect={onSelect} style={{backgroundColor: "#faf8fa"}} multiple treeData={treeData}/>}
            </Col>
            <Col className="Text-left Scroll-y" span={19} style={{backgroundColor: "#faf8fa", height:"60vh", paddingLeft: "20px"}}>
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
                  }}> 
                  {file}
                </ReactMarkdown>}
            </Col>
        </Row>
    )
}

export default ProjectGitRepo;