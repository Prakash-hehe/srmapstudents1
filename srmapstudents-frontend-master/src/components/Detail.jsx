import React, { Component } from "react";
import "../App.css"

class Detail extends Component {
    titleHeading(heading) {
        return <h2>{heading}</h2>
    }
    titleValue(title, value) {
        return (
            <div className="detail-div">
                <h3>{title}</h3>
                <div className="value-div">
                    <h5>{value}</h5>
                </div>
            </div>
        )
    }
}

export default Detail;