import React from "react";
import "./App.css";

const InfoBlock = (props) => {
    return (
        <div className = "gameData">
            <h3 className="data_title">{props.title}</h3>
            <div className="data_value">{props.value}</div>
        </div>
    );
};

export default InfoBlock;
