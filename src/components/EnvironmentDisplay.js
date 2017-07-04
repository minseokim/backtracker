import React, { Component } from "react";

const EnvironmentDisplay = (props) => {
  return (
    <div>
      {Object.keys(props.environment).map(key => {
        return (
          <div key={key}>
            {key} = {JSON.stringify(props.environment[key])}
          </div>
        );
      })}
    </div>
  );
};

export default EnvironmentDisplay;