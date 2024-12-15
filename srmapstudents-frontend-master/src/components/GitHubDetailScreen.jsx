import React from 'react';
import Detail from './Detail';
import { getGithub, getStudent } from '../services/studentService';

class GitHubDetailScreen extends Detail {
    state = {
        details: {},
        student:{},
    }
    async componentDidMount() {
        const { data: details } = await getGithub(this.props.match.params.id)
        const {data:student} = await getStudent(this.props.match.params.id)
        this.setState({ details,student})
    }
    render() {
        const { details, student } = this.state
        return (
            <React.Fragment>
                {details.valid !== undefined && <div>
                    {details.valid !== "Invalid Username." && < div className="screen" >
                        {this.titleHeading(`Git Hub Details Of ${student.first_name}`)}
                        < div className="main-content" >
                            {this.titleValue("Number of Repositeries", details.number_of_repos)}
                        </div >
                    </div >}
                </div>}
                {details.valid === "Invalid Username." && < div className="screen" >
                    { this.titleHeading(`${student.first_name}'s Github Username is Invalid`) }
                </div >}
                {details.valid === undefined && < div className="screen" >
                    { this.titleHeading(`Github Details will be updated soon...`) }
                </div >}
            </React.Fragment>
        );
    }
}

export default GitHubDetailScreen;