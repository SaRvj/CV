import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1},
            {id: 2, value: "CSS", xp:1},
            {id: 3, value: "HTML", xp:1}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1},
            {id: 2, value: "Bootstrap", xp:1},
            {id: 3, value: "Sass", xp:1},
            {id: 4, value: "Redux", xp:1}
        ]
    }
    render () {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar/>
                <ProgressBar/>
            </div>
        )
    }
};

export default Languages;