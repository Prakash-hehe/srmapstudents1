import React, { Component } from 'react';
import './App.css';

class Play extends Component {
    state = {
        count: 0,
        tags:['z', 'z1','11z',]
    }
    formatCount() {
        const { count } = this.state
        return count === 0 ? 'zero' : count
    }
    styles = {
        backgroundColor:"red"
    }
    render() {

        return (
            <React.Fragment >
                <ul style={this.styles}>
                    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default Play;
