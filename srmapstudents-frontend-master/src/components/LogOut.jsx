import React, { Component } from 'react';

class LogOut extends Component {
    componentDidMount() {
        localStorage.removeItem("jwt");
        this.props.history.replace("/home")
        window.location = '/home'
    }
    render() {
        return (
            <></>
        );
    }
}

export default LogOut;