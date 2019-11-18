import React from "react";
import "./Matches.scss";
export default function Matches(props) {
  return (
    <div className="match-container">
      <div>
        <h1 className="match-name">{props.name}</h1>
      </div>
      <div className="match-location">
        {props.city ? (
          <div>
            {props.city}, {props.country}
          </div>
        ) : null}
      </div>
      <div className="match-dates">
        <div className="start">Start: {props.start}</div>
        <div>End: {props.end}</div>
      </div>
    </div>
  );
}
