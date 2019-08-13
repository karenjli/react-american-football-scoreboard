import React from "react";
import "./App.css";

const Team = (props) => {
    return (
        <div className = {`teamScore ` + props.status}>
            <h2 className = "team_name">{props.name}</h2>
            <div className = "team_score">{props.score}</div>

        </div>
    )
}

export default Team;