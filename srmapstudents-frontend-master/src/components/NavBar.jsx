import React, { Component } from 'react';
import srmap from "../images/srmap.png"
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const {user} = this.props
        return (
            <nav className='nav'>
                <img src={srmap} alt="The logo of srmap campus" className='nav-img'></img>
                <div style={{flexGrow:1}}></div>
                <ul style={{display:"flex"}}>
                    {user.user_id === -1 && (
                        <React.Fragment>
                            <li><div className='nav-link'><Link className='nav-link-text' to="/login" >Login</Link></div></li>
                            <li><div className='nav-link'><Link className='nav-link-text' to="/register">Register</Link></div></li>
                        </React.Fragment>
                    )}
                    <li><div className='nav-link'><Link className='nav-link-text' to="/student">Search</Link></div></li>
                    {user.user_id !== -1 &&<li><div className='nav-link'><Link className='nav-link-text' to="/profile">Your Profile</Link></div></li>}
                    {user.user_id !== -1 &&<li><div className='nav-link'><Link className='nav-link-text' to="/log-out">Log Out</Link></div></li>}
                </ul>
            </nav>
        );
    }
}

export default NavBar;