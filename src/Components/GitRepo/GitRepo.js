import React, { Component } from 'react';
import {Octokit} from '@octokit/rest';
import {decode} from 'base-64';
import ReactMarkdown from 'react-markdown';
import {Col, Row} from 'antd';
import {Tree} from 'antd';
import { Skeleton } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {javascript} from 'react-syntax-highlighter/dist/esm/languages/prism';

import style from './style';

const {DirectoryTree} = Tree;

const renderers = {
    code: ({value}) => {
      return <SyntaxHighlighter style={style} language={javascript} children={value} />
    }
  }

class GitRepo extends Component{
    constructor(props) {
        super(props);

        this.state ={
            octokit: new Octokit(),
            content: [],
            fileDir: [],
            gotRepo: false,
            gotfile: false,
            fileType: "md",
        }
      }

    componentDidMount = () =>{
        this.checkRepoVersion();
        this.getFile("/README.md", "md");
        this.getFileDir("", "0");
    }

    async func(){
        await this.state.octokit.request('GET /rate_limit');
    }

    async checkRepoVersion(){
        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: this.props.repoData.owner,
            repo: this.props.repoData.repo
            });
        
        if(res.data[0].sha !== this.props.repoData.currentCommit){
            this.setState({currentCommit: res.data[0].sha});
        }
    }

    async getFileDir(Path, pos){
        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}/contents/'+Path, {
            owner: this.props.repoData.owner,
            repo: this.props.repoData.repo,
            });
        
        var temp = [];
        var child = [];
        var leaf = false;
        for(var i = 0; i < res.data.length; i++){
            var isDir = false;
            if(res.data[i].type == "dir"){
                isDir = true;
                child = await this.getFileDir(res.data[i].path, pos + "-" +i);
                leaf = false;
            }else{
                child = [];
                leaf = true;
            }

            var name = res.data[i].name;

            temp.push(
                {
                    title: name,
                    key: pos+"-"+i,
                    children: child,
                    isLeaf: leaf,
                    path: Path + "/" + name,
                    isDir: isDir,
                }
            );
        }
        
        this.setState({fileDir: temp});

        if(pos === "0"){
            this.setState({gotRepo: true});
        }
        
        return temp;
    }

    async getFile(Path, type){
        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: this.props.repoData.owner,
            repo: this.props.repoData.repo,
            path: Path,
            header: {
                    "Accept": "application/vnd.github.v3.raw"
                }
            });
            this.setState({gotfile: true})
            if(type === "md"){
                this.setState({content:  decode(res.data.content) });
            }else{
                this.setState({content: "```" + type + decode(res.data.content) + " ```"});
            }
    }

    onSelect = (keys, info) => {
        if(info.node.isDir){

        }else{
            var type="md";
            if(info.node.title.search(".js") != -1){
                type = "js";
            }else if(info.node.title.search(".css") != -1){
                type =  "css";
            }
            this.setState({gotfile: false});
            this.getFile(info.node.path, type);
        }
    };

    render(){
        return(
            <div>
                <Row style={{ backgroundColor: "#FAFAF0", width: "89vw", height: "80vh", marginLeft:"20px"}}>
                    <Col className="Scroll-y" span={5} style={{height:"80vh", padding: "20px"}}>
                        {!this.state.gotRepo &&  <Skeleton  loading={true} />}
                        {this.state.gotRepo && <DirectoryTree style={{backgroundColor: "#FAFAF0"}} multiple treeData={this.state.fileDir} onSelect={this.onSelect} />}
                    </Col>
                    <Col className="Text-left Scroll-y" span={19} style={{height:"80vh", padding: "20px"}}>
                        {!this.state.gotfile && <Skeleton loading={true}/>}
                        {this.state.gotfile && <ReactMarkdown 
                            renderers={renderers} 
                            children={this.state.content} />
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GitRepo;