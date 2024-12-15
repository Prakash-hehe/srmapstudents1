import React from 'react';
import Form from './Form';
import Joi from "joi-browser";
import { registerProfile, updateProfile, getProfile } from '../services/profileService';

class ProfileForm extends Form {
    state = { 
        data: {
            id:"",
            first_name: "",
            last_name: "",
            section: "",
            branch: "",
            github_username: "",
            codechef_username: "",
            codeforces_username: "",
            linkedin_username: "",
            hackerrank_username: "",
            leetcode_username: "",
            user_id:parseInt(localStorage.getItem("id")),
        },
        errors:{}
    }
    schema = {
        id: Joi.string().min(13).max(13).required().label("Registration Number"),
        first_name: Joi.string().max(255).required().label("First Name"),
        last_name: Joi.string().max(255).required().label("Last Name"),
        branch: Joi.string().max(10).required().label("Branch"),
        section: Joi.string().max(1).required().label("Section"),
        github_username: Joi.string().max(255).required().label("Github username"),
        codechef_username: Joi.string().max(255).required().label("CodeChef username"),
        codeforces_username: Joi.string().max(255).required().label("CodeForces username"),
        linkedin_username: Joi.string().max(255).required().label("Linked In username"),
        hackerrank_username: Joi.string().max(255).required().label("Hackerrank username"),
        leetcode_username: Joi.string().max(255).required().label("Leetcode username"),
        user_id: Joi.number().required().min(1)
    }
    doSubmit = async () => {
        const { user } = this.props
        if (user.user_id === -1) {
        try {
            await registerProfile(this.state.data)
            this.props.history.replace("/ask-to-login")
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors}
                errors.id = ex.response.data.id
                errors.github_username = ex.response.data.github_username
                errors.codechef_username = ex.response.data.codechef_username
                errors.codeforces_username = ex.response.data.codeforces_username
                errors.leetcode_username = ex.response.data.leetcode_username
                errors.linkedin_username = ex.response.data.linkedin_username
                errors.hackerrank_username = ex.response.data.hackerrank_username
                this.setState({errors})
            }
        }
        }
        else {
            await updateProfile(this.state.data)
            this.props.history.replace("/profile")
        }
    }
    async componentDidMount() {
        const { user, id } = this.props
        if (user.user_id !== -1) {
            const { data } = await getProfile()
            this.setState({ data })
        }
        else {
            const ans = { ...this.state.data }
            ans.user_id = id;
            this.setState({ data: ans })
        }
    }
    render() {
        return (
                <div className="form-div" style={{
                        width: "100%",
                    }}>
                    <h3 className='lr-head'>Edit Profile</h3>
                    <form onSubmit={this.handleSubmit} style={{
                    width: "100%",
                        display: "flex",
                        flexDirection:"column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: "2px solid gray",
                        paddingBottom:"5px"
                    }}>
                        <div className="profile-inp-div">
                            {this.renderInput("id", "Registration Number", 'profile-inp')}
                        </div>
                    <div className='profile-inp-div'>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("first_name", "First Name", 'profile-inp')}
                            </div>
                        <div style={{ flexGrow: 0.4 }}></div>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("last_name", "Last Name", 'profile-inp')}
                            </div>
                        </div>
                    <div className="profile-inp-div">
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("branch", "Branch", 'profile-inp')}
                        </div>
                            <div style={{flexGrow:0.4}}></div>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("section", "section", 'profile-inp')}
                        </div>
                        </div>
                    <div className="profile-inp-div">
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("github_username", "Github Username", 'profile-inp')}
                            </div>
                        <div style={{ flexGrow: 0.4 }}></div>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("codeforces_username", "Codeforces Username", 'profile-inp')}
                            </div>
                        </div>
                    <div className="profile-inp-div">
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("codechef_username", "Codechef Username", 'profile-inp')}
                            </div>
                        <div style={{ flexGrow: 0.4 }}></div>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("linkedin_username", "Linkedin Username", 'profile-inp')}
                            </div>
                        </div>
                    <div className="profile-inp-div">
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("leetcode_username", "Leetcode Username", 'profile-inp')}
                            </div>
                        <div style={{ flexGrow: 0.4 }}></div>
                        <div style={{
                            width:"450px"
                        }}>
                            {this.renderInput("hackerrank_username", "Hackerrank Username", 'profile-inp')}
                            </div>
                        </div>
                        {this.renderButton("Save", 'profile-btn')}
                    </form>
                </div>
        );
    }
}

export default ProfileForm;