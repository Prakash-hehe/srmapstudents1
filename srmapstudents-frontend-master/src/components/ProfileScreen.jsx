import React, { Component } from 'react';
import { Link } from "react-router-dom";
import codechef from "../images/codechef.png"
import codeforces from "../images/codeforces.png"
import leetcode from "../images/leetcode.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import hackerrank from "../images/hackerrank.png"
import { getProfile } from '../services/profileService';

class LinkScreen extends Component {
    state = {
        student:{},
    }
    async componentDidMount() {
        const response = await getProfile();
        this.setState({student:response.data})
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column",fontStyle:"italic"}}>
                <h2>{this.state.student.name}</h2>
                <h2>{this.state.student.id}</h2>
                <div className='boxes-container'>
                    {this.box(codechef, "CODE CHEF", `/student/${this.state.student.id}/codechef`)}
                    {this.box(codeforces, "CODE FORCES", `/student/${this.state.student.id}/codeforces`)}
                    {this.box(github, "GIT HUB", `/student/${this.state.student.id}/github`)}
                    {this.box(leetcode, "LEET CODE", `/student/${this.state.student.id}/leetcode`)}
                    {this.box(linkedin, "LINKED IN", `/student/${this.state.student.id}/linkedin`)}
                    {this.box(hackerrank, "HACKER RANK", `/student/${this.state.student.id}/hackerrank`)}
                </div>
                <a href="/edit-profile">Edit Profile</a>
            </div>
        );
    }
}

export default LinkScreen;