import React from 'react';
import Detail from "./Detail"
import { getCodechef, getStudent } from '../services/studentService';

class CodeChefScreen extends Detail {
    state = {
        details: {},
        student:{},
    }
    async componentDidMount() {
        const response = await getCodechef(this.props.match.params.id);
        const {data: student} = await getStudent(this.props.match.params.id)
        this.setState({ details: response.data, student: student })
    }
    render() {
        const { details, student } = this.state
        return (
            <React.Fragment>
            {details.division !== undefined && <div>  
            {details.division !== 'Invalid Username.' && <div className="screen">
                {this.titleHeading(`Code Chef Details Of ${student.first_name}`)}
                <div className="main-content">
                    {this.titleValue("Star Rating", details.star_rating)}
                    {this.titleValue("Contest Rating", details.rating)}
                    {this.titleValue("Highest Contest Rating", details.highest_rating)}
                    {this.titleValue("Division", details.division)}
                    {this.titleValue("Global Rank", details.global_rank)}
                    {this.titleValue("Country Rank", details.country_rank)}
                    {this.titleValue("Number Of Contests Participated", details.no_of_contests)}
                    {this.titleValue("Number Of Problems Solved Fully", details.number_of_problems_solved)}
                    {this.titleValue("Number Of Problems Solved Partially", details.partially_solved_questions)}
                </div>
                    </div>}
            </div>}  
            {details.division === 'Invalid Username.' && <div className="screen">
                {this.titleHeading(`${student.first_name}'s Code Chef Username is Invalid`)}
                </div>}
            {details.division === undefined && <div className="screen">
                {this.titleHeading(`Code Chef details will be updated soon...`)}
            </div>}    
            </React.Fragment>
        );
    }
}

export default CodeChefScreen;