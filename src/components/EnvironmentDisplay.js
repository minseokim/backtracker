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
              let content = JSON.stringify(currentEnv[key]);
              return (
                <div key={key}>
                  {key} = <span>{content}</span>
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
