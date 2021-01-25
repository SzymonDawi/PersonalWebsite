import React, { Component } from 'react';
import {Octokit} from '@octokit/rest';
import {decode} from 'base-64';
import ReactMarkdown from 'react-markdown';
import { Card, Col, Row, Button, } from 'antd';
import {Tree} from 'antd';
import { Skeleton } from 'antd';

const {DirectoryTree} = Tree;

class GitRepo extends Component{
    constructor(props) {
        super(props);

        this.state ={
            octokit: new Octokit(),
            content: [],
            fileDir: [],
            gotRepo: false,
            gotfile: false,
        }
      }

    componentDidMount = () =>{
        this.checkRepoVersion();
        this.getFileDir("", "0");
    }

    componentWillUnmount = () =>{
        this.checkRepoVersion();
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
            console.log("updating repo");
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
        var isDir = false;
        for(var i = 0; i < res.data.length; i++){
            if(res.data[i].type == "dir"){
                isDir = true;
                //child = await this.getFileDir(res.data[i].path, pos + "-" +i);
                leaf = false;
            }else{
                isDir = false;
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

    async getFile(Path){
        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: this.props.repoData.owner,
            repo: this.props.repoData.repo,
            path: Path,
            header: {
                    "Accept": "application/vnd.github.v3.raw"
                }
            });
            this.setState({gotfile: true})
            this.setState({content: decode(res.data.content)});
    }

    onSelect = (keys: React.Key[], info: any) => {
        if(info.node.isDir == "dir"){
            this.getFileDir(keys, info.node.path);
        }else{
            this.setState({gotfile: false});
            this.getFile(info.node.path);
            console.log(info.node.path);
        }
    };

    render(){
        return(
            <div>
                <Row style={{ backgroundColor: "#FAFAF0", width: "90vw" }}>
                    <Col span={5}>
                        {!this.state.gotRepo &&  <Skeleton  loading={true} />}
                        {this.state.gotRepo && <DirectoryTree multiple treeData={this.state.fileDir} onSelect={this.onSelect} />}
                    </Col>
                    <Col className="Text-left Scroll-y" span={19} style={{height:"80vh"}}>
                        {!this.state.gotfile && <Skeleton loading={true}/>}
                        {this.state.gotfile && <ReactMarkdown children={this.state.content} />}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GitRepo;