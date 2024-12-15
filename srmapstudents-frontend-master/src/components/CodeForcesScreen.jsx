import React from 'react';
import Detail from "./Detail"
import { getCodeforces, getStudent } from '../services/studentService';

class CodeForcesScreen extends Detail {
    state = {
        details: {},
        student:{}
        }
    async componentDidMount() {
        const { data: details } = await getCodeforces(this.props.match.params.id);
        const { data: student } = await getStudent(this.props.match.params.id);
        this.setState({ details, student })
    }
    render() {
        const { details, student } = this.state;
        return (
            <React.Fragment>
                {details.tag !== undefined && <React.Fragment>
                    {details.tag !== 'Invalid Username.' && <div className="screen">
                        {this.titleHeading(`Code Forces Details Of ${student.first_name}`)}
                        <div className="main-content">
                            {this.titleValue("Tag", details.tag)}
                            {this.titleValue("Contest Rating", details.current_rating)}
                            {this.titleValue("Maximum Contest Rating", details.maximum_rating)}
                            {this.titleValue("Number Of Problems Solved", details.number_of_problems_solved)}
                        </div>
                    </div>}
                </React.Fragment>}
                {details.tag === 'Invalid Username.' && <div className="screen">
                    {this.titleHeading(`${student.first_name}'s Code Forces Username is Invalid`)}
                </div>}
                {details.tag === undefined && <div className="screen">
                    {this.titleHeading(`Code Forces Details will be Updated soon...`)}
                </div>}
            </React.Fragment>
        );
    }
}

export default CodeForcesScreen;