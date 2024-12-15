import React, { Component } from 'react';
import { Link } from "react-router-dom";
import codechef from "../images/codechef.png"
import codeforces from "../images/codeforces.png"
import leetcode from "../images/leetcode.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import hackerrank from "../images/hackerrank.png"
import { getStudent } from '../services/studentService';

class LinkScreen extends Component {
    state = {
        student:{},
    }
    async componentDidMount() {
        try {
            const response = await getStudent(this.props.match.params.id)
            this.setState({student:response.data})
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                this.props.history.replace("/not-found")
            }
        }
    }
    box(img, text, link) {
        return (
            <div className='box'>
                <Link to={link}><img src={img} alt="a logo" className='box-img' /></Link>
                <h4>{ text }</h4>
            </div>
        )
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", fontStyle:"italic"}}>
                <h2>{this.state.student.name}</h2>
                <h2>{this.props.match.params.id}</h2>
                <div className='boxes-container'>
                    {this.box(codechef, "CODE CHEF", `/student/${this.props.match.params.id}/codechef`)}
                    {this.box(codeforces, "CODE FORCES", `/student/${this.props.match.params.id}/codeforces`)}
                    {this.box(github, "GIT HUB", `/student/${this.props.match.params.id}/github`)}
                    {this.box(leetcode, "LEET CODE", `/student/${this.props.match.params.id}/leetcode`)}
                    {this.box(linkedin, "LINKED IN", `/student/${this.props.match.params.id}/linkedin`)}
                    {this.box(hackerrank, "HACKER RANK", `/student/${this.props.match.params.id}/hackerrank`)}
                </div>
            </div>
        );
    }
}

export default LinkScreen;