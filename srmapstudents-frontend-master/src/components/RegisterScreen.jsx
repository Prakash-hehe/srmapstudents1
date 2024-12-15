import React from 'react';
import Joi from 'joi-browser'
import Form from './Form';
import { registerUser } from '../services/userService';
class RegisterScreen extends Form {
    state = {
        data: {
            username: "",
            email: "",
            password: "",
        },
        errors: {}
    }
    schema = {
        username: Joi.string().min(5).required().label("username"),
        email:Joi.string().email().required().label("Email"),
        password: Joi.string().min(8).required().label("password"),
    }
    doSubmit = async () => {
        try{
            const response = await registerUser(this.state.data)
            localStorage.setItem('id', response.data.id)
            this.props.history.replace('/edit-profile')
            window.location = '/edit-profile'
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors}
                errors.username = ex.response.data.username
                errors.email = ex.response.data.email
                errors.password = ex.response.data.password[0]
                this.setState({ errors })
            }
        }
        
    }
    render() {
        return (
            <div className='lrbg'>
                <div className="form-div">
                    <h3 className='lr-head'>Sign Up</h3>
                    <form onSubmit={this.handleSubmit} style={{
                        width:"100%"
                    }}>
                        {this.renderInput("username", "UserName")}
                        {this.renderInput("email", "Email", 'input', "email")}
                        {this.renderInput("password", "Password", 'input', "password")}
                        {this.renderButton("Register")}
                    </form>
                    <p>already a member? <a href="/login">Log In</a></p>
                </div>
            </div>
        );
    }
}

export default RegisterScreen;