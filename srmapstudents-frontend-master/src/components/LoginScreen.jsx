import React from 'react';
import Joi from 'joi-browser'
import Form from './Form';
import { LoginUser } from '../services/userService';

class LoginScreen extends Form {
    username = React.createRef()
    password = React.createRef()
    state = { 
        data: {
            username:"",
            password:"",
        },
        errors:{}
    }
    schema = {
        username: Joi.string().min(5).required().label("username"),
        password: Joi.string().min(8).required().label("password"),
    }
    doSubmit = async () => {
        try {
            const response = await LoginUser(this.state.data)
            localStorage.setItem("jwt", response.data.access)
            this.props.history.replace("/profile")
            window.location = "/profile"
        }
        catch (ex) {
            if (ex.response && ex.response.status === 401) {
                const errors = {...this.state.errors}
                errors.username = ex.response.data.detail
                this.setState({ errors })
            }
        }
    }
    render() {
        return (
            <div className='lrbg'>
                <div className="form-div">
                    <h3 className='lr-head'>Log In</h3>
                    <form onSubmit={this.handleSubmit} style={{
                        width:"100%"
                    }}>
                        {this.renderInput("username", "UserName", 'input', 'text')}
                        {this.renderInput("password", "Password", 'input', "password",)}
                        {this.renderButton("Login")}
                    </form>
                    <p>Not a member already? <a href="/register">Sign Up</a></p>
                    <a href='/forgot-password'>Forgot Password?</a>
                </div>
            </div>
        );
    }
}

export default LoginScreen;