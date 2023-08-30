import React from "react";
import "./App.css";

import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="row">
        <div className="col-sm-12 results result-name">
          <h2>{props.results.word}</h2>
          <span className="phonetic">/{props.results.phonetic}/</span>
        </div>
        <div className="col-sm-12 results result-list">
          {props.results && props.results.meanings ? (
            props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meanings meaning={meaning} />
                </div>
              );
            }) 
          ) : (
            <div className="display">Load</div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
