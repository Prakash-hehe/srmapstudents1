import React, { Component } from 'react';

class AskToLogin extends Component {
    render() {
        return (
            <div className='screen'>
                <p>Your registration is completed please login to continue...</p>
                <a href="/login">login</a>
            </div>
        );
    }
}

export default AskToLogin;