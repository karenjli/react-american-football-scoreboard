import React from "react";
import "./App.css";
import InfoBlock from "./InfoBlock.js";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <InfoBlock title = "Down" value ={3} />
      <InfoBlock title = "To Go" value ={7} />
      <InfoBlock title = "Ball on" value ={21} />
      <InfoBlock title = "Quarter" value ={4} />

      {/*<div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
  </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>*/}
    </div>
  );
};

export default BottomRow;
