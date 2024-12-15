import React from 'react';
import Form from './Form';
import Joi from 'joi-browser';
import srm from "../images/srm.jpg"

class SearchPage extends Form {
    studentId = React.createRef()
    state = {
        data: {
            studentId:""
        },
        errors:{}
    }
    schema = {
        studentId:Joi.string().required().min(13).max(13).label("Student Id"),
    }
    doSubmit = () => {
        console.log("Submitted")
        window.location = `/student/${this.state.data.studentId}`
    }
    render() {
        return (
            <div className='searchpage'>
                <div>
                    <img className="logo" src={srm} alt="srmap logo"/>
                </div>
                <div id='container'>
                    <h2>Search Your Friends</h2>
                <form onSubmit={this.handleSubmit} style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <div className="input-div" style={{
                        }}>
                            {this.renderInput("studentId", "Registration Number", "search-input")}
                        </div>
                    {this.renderButton("Search", 'btn-s')}
                </form>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                }}>
                    <ul style={{
                flexGrow:1,
            }}></ul>
                        <ul className="link"><a href="/profile">Your Profile</a></ul>
        </div>
            </div>
        );
    }
}

export default SearchPage;