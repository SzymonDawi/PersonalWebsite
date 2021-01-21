import React, { Component } from 'react';
import {Octokit} from '@octokit/rest';

class GitRepo extends Component{
    constructor(props) {
        super(props);

        this.state ={
            octokit: new Octokit(),
            content: [],
            gotRepo: false,
        }
      }

    componentDidMount = () =>{
        this.func();
    }
    
    async func(){
        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}', {
            owner: this.props.Owner,
            repo: this.props.Repo
          });

        console.log(res.data);

        var res = await this.state.octokit.request('GET /repos/{owner}/{repo}/contents/', {
            owner: this.props.Owner,
            repo: this.props.Repo
          });
        this.setState({content: res.data});
        this.setState({gotRepo: true});
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th> File name</th>
                        <th> file size</th>
                    </tr>
                    {this.state.content.map((file) =>(
                        <tr>
                            <td>{file.name}</td>
                            <td>{file.size}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default GitRepo;