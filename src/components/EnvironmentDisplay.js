import React from "react";

const EnvironmentDisplay = props => {
  const { context } = props;
  console.log("context :", context);
  return (
    <div className="EnvironmentDisplay">
      {context.map((currentEnv, firstKey) => {
        return (
          <div key={firstKey}>
            {Object.keys(currentEnv).map(key => {
              return (
                <div key={key}>
                  {key} = {JSON.stringify(currentEnv[key])}
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EnvironmentDisplay;
